/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose" />
import { Matiere } from './matiere.dto';
import { MatiereService } from './matiere.service';
export declare class MatiereController {
    private readonly matiereService;
    constructor(matiereService: MatiereService);
    create(matiere: Matiere): Promise<(Matiere & import("mongoose").Document<any, any, any> & {
        _id: any;
    }) | {
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    findAll(query: any): Promise<Omit<Matiere & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, never>[]>;
    findOne(id: string): Promise<Matiere & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    update(id: string, updatedMatiere: Matiere): Promise<import("mongodb").UpdateResult>;
    remove(id: string): Promise<void>;
}
