/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose" />
import { FiliereService } from './filiere.service';
import { Filiere } from './filiere.dto';
export declare class FiliereController {
    private readonly filiereService;
    constructor(filiereService: FiliereService);
    create(filiere: Filiere): Promise<(Filiere & import("mongoose").Document<any, any, any> & {
        _id: any;
    }) | {
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    findAll(query: any): Promise<Omit<Filiere & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, never>[]>;
    findOne(id: string): Promise<Filiere & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    update(id: string, updatedFiliere: Filiere): Promise<import("mongodb").UpdateResult>;
    remove(id: string): Promise<void>;
}
