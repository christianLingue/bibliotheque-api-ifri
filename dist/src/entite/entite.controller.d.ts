/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose" />
import { Entite } from './entite.dto';
import { EntiteService } from './entite.service';
export declare class EntiteController {
    private readonly entiteService;
    constructor(entiteService: EntiteService);
    create(entite: Entite): Promise<(Entite & import("mongoose").Document<any, any, any> & {
        _id: any;
    }) | {
        statusCode: import("@nestjs/common").HttpStatus;
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
