import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { compare } from 'bcrypt';
import { User, UserDocument } from 'src/user/user.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    ) {}

    async validateUser(username: string, password: string): Promise<any> {
        const foundedUser = await this.userModel.findOne({username,isArchived: false});

        if (!foundedUser) {
            throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
          }
      
          const isValidUser = await compare(password, foundedUser.password);
      
          if (!isValidUser) {
            throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
          }
      
        delete foundedUser.password;
        return foundedUser;
    }   
     
}
