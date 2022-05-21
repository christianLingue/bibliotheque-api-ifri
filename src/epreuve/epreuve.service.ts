import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Epreuve, EpreuveDocument } from './epreuve.dto';

@Injectable()
export class EpreuveService {
  constructor(
    @InjectModel(Epreuve.name)
    private model: Model<EpreuveDocument>
  ) {}

  async create(epreuve: Epreuve) {
    try {
      console.log("contatctde service")
      return new this.model({...epreuve}).save();
    } catch (error) {
         throw new HttpException(
           { statusCode: HttpStatus.BAD_REQUEST, message: error.message },
           HttpStatus.BAD_REQUEST,
       );  
    }
 }

 async findAll(query: any) {
   try {
     return await this.model.find({...query,isArchived: false}).populate('matiere');
   } catch (error) {
     throw new HttpException(
         { statusCode: HttpStatus.BAD_REQUEST, message: error.message },
         HttpStatus.BAD_REQUEST,
     );
   }
 }

 async findOne(id: string) {
     try {
       return await this.model.findById(id).populate('matiere');
     } catch (error) {
       throw new HttpException(
         { statusCode: HttpStatus.BAD_REQUEST, message: error.message },
           HttpStatus.BAD_REQUEST
         );
     }
 }

 async update(id: string,updateEpreuve: Epreuve) {
   try {
     return await this.model.updateOne({id},updateEpreuve);
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
     let foundedEpreuve = await this.model.findById(id);
     foundedEpreuve.deletedAt = new Date().toISOString();
     foundedEpreuve.isArchived = true;
     await this.model.updateOne({_id: id},foundedEpreuve);
   } catch (error) {
       throw new HttpException(
         { statusCode: HttpStatus.BAD_REQUEST, message: error.message },
         HttpStatus.BAD_REQUEST,
     );
   }
 }
}
