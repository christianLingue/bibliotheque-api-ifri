import { IUser } from "./user.types";
import { ApiPropertyOptional } from "@nestjs/swagger";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsNotEmpty, IsString, MinLength } from "class-validator";
import { Document } from 'mongoose'

@Schema({ timestamps: true })
export class User implements IUser {
    @Prop()
    @IsString()
    @IsNotEmpty()   
    @ApiPropertyOptional({
        required: true,
        type: "string",
        example: "John"
    })
    firstName: string;

    @Prop()
    @IsString()
    @IsNotEmpty()
    @ApiPropertyOptional({
        required: true,
        type: "string",
        example: "Doe"
    })
    lastName: string;

    @Prop()
    @IsString()
    @IsNotEmpty()
    @ApiPropertyOptional({
        required: true,
        type: "string",
        example: "jdoe12"
    })
    username: string;

    @Prop()
    @IsNotEmpty()
    @ApiPropertyOptional({
        required: true,
        type: "string",
        example: "johndoe@gmail.com"
    })
    email: string;

    @Prop()
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    @ApiPropertyOptional({
        default: "",
        required: true,
        type: "string",
        description: 'Minimal length is 5'
    })
    password: string;

    @Prop()
    @ApiPropertyOptional({
        example: "admin",
        default: "user",
        required: true,
        type: "string",
    })
    role: string;

    @Prop({default: false})
    isArchived: boolean;

    @Prop({default: null})
    deletedAt: string;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);