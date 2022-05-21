import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Filiere, FiliereDocument } from './filiere.dto';
import { Model } from 'mongoose';

@Injectable()
export class FiliereService {
  constructor(
    @InjectModel(Filiere.name)
    private model: Model<FiliereDocument>
  ) {}

  async create(filiere: Filiere) {
    try {
      let foundedFiliere = await this.model.countDocuments({sigle: filiere.sigle, isArchived: false});
      if ( foundedFiliere != 0 ) {
        return { statusCode: HttpStatus.BAD_REQUEST, message: "La filiere existe deja" }
      }
      return new this.model({...filiere}).save();
    } catch (error) {
         throw new HttpException(
           { statusCode: HttpStatus.BAD_REQUEST, message: error.message },
           HttpStatus.BAD_REQUEST,
       );  
    }
 }

 async findAll(query: any) {
   try {
     return await this.model.find({...query,isArchived: false}).populate('entity');
   } catch (error) {
     throw new HttpException(
         { statusCode: HttpStatus.BAD_REQUEST, message: error.message },
         HttpStatus.BAD_REQUEST,
     );
   }
 }

 async findOne(id: string) {
     try {
       return await this.model.findById(id).populate('entity');
     } catch (error) {
       throw new HttpException(
         { statusCode: HttpStatus.BAD_REQUEST, message: error.message },
           HttpStatus.BAD_REQUEST
         );
     }
 }

 async update(id: string,updateEntite: Filiere) {
   try {
     return await this.model.updateOne({id},updateEntite);
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
     let foundedFiliere = await this.model.findById(id);
     foundedFiliere.deletedAt = new Date().toISOString();
     foundedFiliere.isArchived = true;
     await this.model.updateOne({_id: id},foundedFiliere);
   } catch (error) {
       throw new HttpException(
         { statusCode: HttpStatus.BAD_REQUEST, message: error.message },
         HttpStatus.BAD_REQUEST,
     );
   }
 }
}
