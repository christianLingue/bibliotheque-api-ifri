/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import { Matiere, MatiereDocument } from './matiere.dto';
export declare class MatiereService {
    private model;
    constructor(model: Model<MatiereDocument>);
    create(matiere: Matiere): Promise<(Matiere & import("mongoose").Document<any, any, any> & {
        _id: any;
    }) | {
        statusCode: HttpStatus;
        message: string;
    }>;
    findAll(query: any): Promise<Omit<Matiere & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, never>[]>;
    findOne(id: string): Promise<Matiere & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    update(id: string, updateMatiere: Matiere): Promise<import("mongodb").UpdateResult>;
    remove(id: string): Promise<void>;
}
