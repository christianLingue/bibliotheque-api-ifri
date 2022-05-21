import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "./user.dto";
import { Model } from 'mongoose';
import * as bcrypt  from 'bcrypt';


@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) 
        private readonly model: Model<UserDocument>,
    ) {}
    
    async all(query: any){
        try {
            return await this.model.find({...query,isArchived: false});
        } catch (error) {
            throw new HttpException(
                { statusCode: HttpStatus.BAD_REQUEST, message: error.message },
                HttpStatus.BAD_REQUEST,
            );
        }
    }

    async one(id: string){
        try {
            return await this.model.findById(id);
        } catch (error) {
            throw new HttpException(
                { statusCode: HttpStatus.BAD_REQUEST, message: error.message },
                HttpStatus.BAD_REQUEST,
            );
        }
    }

    async create(user: User) {
        try {
           
            let foundedUser = await this.model.countDocuments({ isArchived: false, email: user.email });
            if (foundedUser != 0) {
                throw new HttpException(
                    { statusCode: HttpStatus.BAD_REQUEST, message: "L'utilisateur existe deja" },
                    HttpStatus.BAD_REQUEST,
                );
            } else {
                const salt = await bcrypt.genSalt();
                user.password = await bcrypt.hash(user.password, salt);;
                return await new this.model({...user}).save();  
            }
        } catch (error) {
            throw new HttpException(
                { statusCode: HttpStatus.BAD_REQUEST, message: "Something " },
                HttpStatus.BAD_REQUEST,
            );
        }
    }

    async update(id: string,user: User){
        
        // return await this.model.updateOne({id},user);
        try {
            return await this.model.updateOne({id},user);
        } catch (error) {
            console.log(error);
            throw new HttpException(
                { statusCode: HttpStatus.BAD_REQUEST, message: error.message },
                HttpStatus.BAD_REQUEST,
            );
        }
    }

    async delete(id: string){
        try {
            let foundedUser = await this.model.findById(id);
            foundedUser.deletedAt = new Date().toISOString();
            foundedUser.isArchived = true;
            await this.model.updateOne({_id: id},foundedUser);
        } catch (error) {
            throw new HttpException(
                { statusCode: HttpStatus.BAD_REQUEST, message: error.message },
                HttpStatus.BAD_REQUEST,
            );
        }
    }

    async find(query) {
        try {
            return await this.model.find({...query,isArchived: false});
        } catch (error) {
            throw new HttpException(
                { statusCode: HttpStatus.BAD_REQUEST, message: error.message },
                HttpStatus.BAD_REQUEST,
            );
        }
    }
    
}