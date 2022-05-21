import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Entite, EntiteDocument } from './entite.dto';
import { Model } from 'mongoose';


@Injectable()
export class EntiteService {
  constructor(
    @InjectModel(Entite.name) 
    private readonly model: Model<EntiteDocument> ) {}

  async create(entite: Entite) {
     try {
       let foundedEntity = await this.model.countDocuments({sigle: entite.sigle, isArchived: false});
       if ( foundedEntity != 0 ) {
         return { statusCode: HttpStatus.BAD_REQUEST, message: "L'entite existe deja" }
       }
       return new this.model({...entite}).save();
     } catch (error) {
          throw new HttpException(
            { statusCode: HttpStatus.BAD_REQUEST, message: error.message },
            HttpStatus.BAD_REQUEST,
        );  
     }
  }

  async findAll(query: any) {
    try {
      return await this.model.find({...query,isArchived: false});
    } catch (error) {
      throw new HttpException(
          { statusCode: HttpStatus.BAD_REQUEST, message: error.message },
          HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findOne(id: string) {
      try {
        return await this.model.findById(id);
      } catch (error) {
        throw new HttpException(
          { statusCode: HttpStatus.BAD_REQUEST, message: error.message },
            HttpStatus.BAD_REQUEST
          );
      }
  }

  async update(id: string,updateEntite: Entite) {
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
      let foundedEntity = await this.model.findById(id);
      foundedEntity.deletedAt = new Date().toISOString();
      foundedEntity.isArchived = true;
      await this.model.updateOne({_id: id},foundedEntity);
    } catch (error) {
        throw new HttpException(
          { statusCode: HttpStatus.BAD_REQUEST, message: error.message },
          HttpStatus.BAD_REQUEST,
      );
    }
  }
}
