/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { User, UserDocument } from "./user.dto";
import { Model } from 'mongoose';
export declare class UserService {
    private readonly model;
    constructor(model: Model<UserDocument>);
    all(query: any): Promise<(User & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    one(id: string): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    create(user: User): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    update(id: string, user: User): Promise<import("mongodb").UpdateResult>;
    delete(id: string): Promise<void>;
    find(query: any): Promise<(User & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
}
