/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { HttpStatus } from '@nestjs/common';
import { Entite, EntiteDocument } from './entite.dto';
import { Model } from 'mongoose';
export declare class EntiteService {
    private readonly model;
    constructor(model: Model<EntiteDocument>);
    create(entite: Entite): Promise<(Entite & import("mongoose").Document<any, any, any> & {
        _id: any;
    }) | {
        statusCode: HttpStatus;
        message: string;
    }>;
    findAll(query: any): Promise<(Entite & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    findOne(id: string): Promise<Entite & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    update(id: string, updateEntite: Entite): Promise<import("mongodb").UpdateResult>;
    remove(id: string): Promise<void>;
}
