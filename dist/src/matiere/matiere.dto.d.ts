import { IMatiere } from "./matiere.types";
import { Document } from 'mongoose';
import mongoose from "mongoose";
export declare class Matiere implements IMatiere {
    code: string;
    libelle: string;
    filiere: string;
    isArchived: boolean;
    deletedAt: string;
}
export declare type MatiereDocument = Matiere & Document;
export declare const MatiereSchema: mongoose.Schema<Document<Matiere, any, any>, mongoose.Model<Document<Matiere, any, any>, any, any, any>, {}, {}>;
