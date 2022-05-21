import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { IMatiere } from "./matiere.types";
import { Document } from 'mongoose';
import mongoose from "mongoose";

@Schema({timestamps: true})
export class Matiere implements IMatiere {
    @Prop({required:  true})
    @IsString()
    @IsNotEmpty()
    @ApiPropertyOptional({
        required:  true,
        example: 'RI'
    })
    code: string;

    @Prop({required:  true})
    @IsString()
    @IsNotEmpty()
    @ApiPropertyOptional({
        required: true,
        example: 'Reseaux Informatiques'
    })
    libelle: string;
    
    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Filiere',
    })
    @IsString()
    @IsNotEmpty()
    @ApiPropertyOptional({
        required: true,
        type: 'string',
        description: 'Should be an Id of an existing Filiere'
    })
    filiere: string;

    isArchived: boolean;
    deletedAt: string;
}

export type MatiereDocument = Matiere & Document;
export const MatiereSchema = SchemaFactory.createForClass(Matiere);