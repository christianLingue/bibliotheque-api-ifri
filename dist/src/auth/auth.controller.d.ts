import { AuthService } from './auth.service';
import { _User } from './_user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(user: _User): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
