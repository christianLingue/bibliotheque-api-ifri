/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose" />
import { Response } from "express";
import { User } from "./user.dto";
import { UserService } from "./user.service";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    createUser(user: User): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    getAll(query: any): Promise<(User & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    getOne(id: string): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    updateUser(user: User, response: Response, id: string): Promise<Response<any, Record<string, any>>>;
    archiveUser(response: any, id: string): any;
    find(): Promise<void>;
    testGuardForMe(): Promise<string>;
}
