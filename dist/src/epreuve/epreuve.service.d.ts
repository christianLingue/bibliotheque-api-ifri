/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Model } from 'mongoose';
import { Epreuve, EpreuveDocument } from './epreuve.dto';
export declare class EpreuveService {
    private model;
    constructor(model: Model<EpreuveDocument>);
    create(epreuve: Epreuve): Promise<Epreuve & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    findAll(query: any): Promise<Omit<Epreuve & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, never>[]>;
    findOne(id: string): Promise<Epreuve & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    update(id: string, updateEpreuve: Epreuve): Promise<import("mongodb").UpdateResult>;
    remove(id: string): Promise<void>;
}
