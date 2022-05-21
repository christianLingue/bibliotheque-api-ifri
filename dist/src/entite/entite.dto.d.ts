/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { IEntite } from "./entite.types";
import { Document } from 'mongoose';
export declare class Entite implements IEntite {
    sigle: string;
    libelle: string;
    createdAt: string;
    isArchived: boolean;
    deletedAt: string;
}
export declare type EntiteDocument = Entite & Document;
export declare const EntiteSchema: import("mongoose").Schema<Document<Entite, any, any>, import("mongoose").Model<Document<Entite, any, any>, any, any, any>, {}, {}>;
