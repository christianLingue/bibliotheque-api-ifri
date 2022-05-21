import { ApiPropertyOptional } from "@nestjs/swagger";
import { _IUser } from "./_user.types";

export class _User implements _IUser {
    @ApiPropertyOptional({ 
        description: 'The username or the Email'
    })
    username: string;

    @ApiPropertyOptional()
    password: string;
}
