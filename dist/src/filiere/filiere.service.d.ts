/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { HttpStatus } from '@nestjs/common';
import { Filiere, FiliereDocument } from './filiere.dto';
import { Model } from 'mongoose';
export declare class FiliereService {
    private model;
    constructor(model: Model<FiliereDocument>);
    create(filiere: Filiere): Promise<(Filiere & import("mongoose").Document<any, any, any> & {
        _id: any;
    }) | {
        statusCode: HttpStatus;
        message: string;
    }>;
    findAll(query: any): Promise<Omit<Filiere & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, never>[]>;
    findOne(id: string): Promise<Filiere & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    update(id: string, updateEntite: Filiere): Promise<import("mongodb").UpdateResult>;
    remove(id: string): Promise<void>;
}
