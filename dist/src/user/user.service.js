"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_dto_1 = require("./user.dto");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcrypt");
let UserService = class UserService {
    constructor(model) {
        this.model = model;
    }
    async all(query) {
        try {
            return await this.model.find(Object.assign(Object.assign({}, query), { isArchived: false }));
        }
        catch (error) {
            throw new common_1.HttpException({ statusCode: common_1.HttpStatus.BAD_REQUEST, message: error.message }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async one(id) {
        try {
            return await this.model.findById(id);
        }
        catch (error) {
            throw new common_1.HttpException({ statusCode: common_1.HttpStatus.BAD_REQUEST, message: error.message }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async create(user) {
        try {
            let foundedUser = await this.model.countDocuments({ isArchived: false, email: user.email });
            if (foundedUser != 0) {
                throw new common_1.HttpException({ statusCode: common_1.HttpStatus.BAD_REQUEST, message: "L'utilisateur existe deja" }, common_1.HttpStatus.BAD_REQUEST);
            }
            else {
                const salt = await bcrypt.genSalt();
                user.password = await bcrypt.hash(user.password, salt);
                ;
                return await new this.model(Object.assign({}, user)).save();
            }
        }
        catch (error) {
            throw new common_1.HttpException({ statusCode: common_1.HttpStatus.BAD_REQUEST, message: "Something " }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async update(id, user) {
        try {
            return await this.model.updateOne({ id }, user);
        }
        catch (error) {
            console.log(error);
            throw new common_1.HttpException({ statusCode: common_1.HttpStatus.BAD_REQUEST, message: error.message }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async delete(id) {
        try {
            let foundedUser = await this.model.findById(id);
            foundedUser.deletedAt = new Date().toISOString();
            foundedUser.isArchived = true;
            await this.model.updateOne({ _id: id }, foundedUser);
        }
        catch (error) {
            throw new common_1.HttpException({ statusCode: common_1.HttpStatus.BAD_REQUEST, message: error.message }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async find(query) {
        try {
            return await this.model.find(Object.assign(Object.assign({}, query), { isArchived: false }));
        }
        catch (error) {
            throw new common_1.HttpException({ statusCode: common_1.HttpStatus.BAD_REQUEST, message: error.message }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_dto_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map