import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import mongoose from "mongoose";
import { IFiliere } from "./filiere.types";
import { Document } from "mongoose";


@Schema({timestamps: true})
export class Filiere implements IFiliere {
    @Prop()
    @ApiPropertyOptional({
        example: 'IM',
    })
    @IsNotEmpty()
    @IsString()
    sigle: string;
    
    @Prop()
    @ApiPropertyOptional({
        example: 'Internet et Multimedia'
    })
    @IsNotEmpty()
    @IsString()
    libelle: string;

    @ApiPropertyOptional({
        required: true,
        type: 'string',
        description: 'Should be an Id of an existing Entity'
    })
    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Entite',
    })
    entity: string;

    @Prop()
    @ApiPropertyOptional({
        required: true,
        example: '2019'
    })
    @IsNotEmpty()
    @IsString()
    promotion: string;

    isArchived: boolean;
    deletedAt: string;
}

export type FiliereDocument =  Filiere & Document;
export const FiliereSchema = SchemaFactory.createForClass(Filiere);
