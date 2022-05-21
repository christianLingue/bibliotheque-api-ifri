/// <reference types="multer" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose" />
import { EpreuveService } from './epreuve.service';
import { Epreuve } from './epreuve.dto';
export declare class EpreuveController {
    private readonly epreuveService;
    constructor(epreuveService: EpreuveService);
    create(epreuve: Epreuve, file: Express.Multer.File): Promise<Epreuve & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    findAll(query: any): Promise<Omit<Epreuve & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, never>[]>;
    findOne(id: string): Promise<Epreuve & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    update(id: string, updatedEpreuve: Epreuve): Promise<import("mongodb").UpdateResult>;
    remove(id: string): Promise<void>;
    uploadSomething(file: any): void;
}
