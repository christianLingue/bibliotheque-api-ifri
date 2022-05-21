import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { IEntite } from "./entite.types";
import { Document } from 'mongoose';

@Schema()
export class Entite implements IEntite {

    @Prop()
    @ApiPropertyOptional({
        example: 'IFRI'
    })
    @IsNotEmpty()
    @IsString()
    sigle: string;
     
    @Prop()
    @ApiPropertyOptional({
        example: 'Institut de Formation et de Recherche en Informatique'
    })
    @IsNotEmpty()
    @IsString()
    libelle: string;

    // @Prop({
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Field',
    //   })
    // filieres: string[];
    createdAt: string;
    isArchived: boolean;
    deletedAt: string;
}

export type EntiteDocument = Entite & Document;
export const EntiteSchema = SchemaFactory.createForClass(Entite);