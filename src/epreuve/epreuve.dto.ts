import  mongoose  from 'mongoose';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IEpreuve } from "./epreuve.types";
import { Document } from 'mongoose';
import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

@Schema({timestamps: true})
export class Epreuve implements IEpreuve {
    @Prop({required: true})
    @ApiPropertyOptional({
        example: 'Partiel de Programation Java'
    })
    @IsString()
    @IsNotEmpty()
    designation: string;

    @Prop({required: true})
    @ApiPropertyOptional({
        description: 'Link of the file'
    })
    @IsNotEmpty()
    epreuve: string;

    @Prop()
    @ApiPropertyOptional({
        description: 'Link of the file'
    })
    corrige: string;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Matiere',
        required: true
    })
    @ApiPropertyOptional({
        required: true,
        example: 'Should be an Id of an existing Matiere'
    })
    @IsString()
    @IsNotEmpty()
    matiere: string;

    // @Prop({
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Filiere',
    //     required: true
    // })
    // @ApiPropertyOptional({
    //     required: true,
    //     example: 'Should be an Id of an existing Filiere'
    // })
    // @IsString()
    // @IsNotEmpty()
    // filiere: string;

    @Prop()
    @ApiPropertyOptional({
        required: true,
        example: 'L3'
    })
    @IsString()
    @IsNotEmpty()
    class: string;
    isArchived: boolean;
    deletedAt: string;
}

export type EpreuveDocument = Epreuve & Document;
export const EpreuveSchema = SchemaFactory.createForClass(Epreuve);