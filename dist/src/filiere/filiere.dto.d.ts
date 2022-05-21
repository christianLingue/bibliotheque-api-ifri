import mongoose from "mongoose";
import { IFiliere } from "./filiere.types";
import { Document } from "mongoose";
export declare class Filiere implements IFiliere {
    sigle: string;
    libelle: string;
    entity: string;
    promotion: string;
    isArchived: boolean;
    deletedAt: string;
}
export declare type FiliereDocument = Filiere & Document;
export declare const FiliereSchema: mongoose.Schema<mongoose.Document<Filiere, any, any>, mongoose.Model<mongoose.Document<Filiere, any, any>, any, any, any>, {}, {}>;
