import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Matiere, MatiereDocument } from './matiere.dto';

@Injectable()
export class MatiereService {
  constructor(
    @InjectModel(Matiere.name)
    private model: Model<MatiereDocument>
  ) {}

  async create(matiere: Matiere) {
    try {
      let foundedMatiere = await this.model.countDocuments({code: matiere.code, isArchived: false});
      if ( foundedMatiere != 0 ) {
        return { statusCode: HttpStatus.BAD_REQUEST, message: "La matiere existe deja" }
      }
      return new this.model({...matiere}).save();
    } catch (error) {
         throw new HttpException(
           { statusCode: HttpStatus.BAD_REQUEST, message: error.message },
           HttpStatus.BAD_REQUEST,
       );  
    }
 }

 async findAll(query: any) {
   try {
     return await this.model.find({...query,isArchived: false}).populate('filiere');
   } catch (error) {
     throw new HttpException(
         { statusCode: HttpStatus.BAD_REQUEST, message: error.message },
         HttpStatus.BAD_REQUEST,
     );
   }
 }

 async findOne(id: string) {
     try {
       return await this.model.findById(id).populate('filiere');
     } catch (error) {
       throw new HttpException(
         { statusCode: HttpStatus.BAD_REQUEST, message: error.message },
           HttpStatus.BAD_REQUEST
         );
     }
 }

 async update(id: string,updateMatiere: Matiere) {
   try {
     return await this.model.updateOne({id},updateMatiere);
   } catch (error) {
     console.log(error);
     throw new HttpException(
         { statusCode: HttpStatus.BAD_REQUEST, message: error.message },
         HttpStatus.BAD_REQUEST,
     );
   }
 }

 async remove(id: string) {
   try {
     let foundedMatiere = await this.model.findById(id);
     foundedMatiere.deletedAt = new Date().toISOString();
     foundedMatiere.isArchived = true;
     await this.model.updateOne({_id: id},foundedMatiere);
   } catch (error) {
       throw new HttpException(
         { statusCode: HttpStatus.BAD_REQUEST, message: error.message },
         HttpStatus.BAD_REQUEST,
     );
   }
 }
}
