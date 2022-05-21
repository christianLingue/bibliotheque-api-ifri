import { UserDocument } from 'src/user/user.dto';
import { Model } from 'mongoose';
export declare class AuthService {
    private readonly userModel;
    constructor(userModel: Model<UserDocument>);
    validateUser(username: string, password: string): Promise<any>;
}
