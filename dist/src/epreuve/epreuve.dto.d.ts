import mongoose from 'mongoose';
import { IEpreuve } from "./epreuve.types";
import { Document } from 'mongoose';
export declare class Epreuve implements IEpreuve {
    designation: string;
    epreuve: string;
    corrige: string;
    matiere: string;
    class: string;
    isArchived: boolean;
    deletedAt: string;
}
export declare type EpreuveDocument = Epreuve & Document;
export declare const EpreuveSchema: mongoose.Schema<mongoose.Document<Epreuve, any, any>, mongoose.Model<mongoose.Document<Epreuve, any, any>, any, any, any>, {}, {}>;
