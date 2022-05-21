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
exports.FiliereService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const filiere_dto_1 = require("./filiere.dto");
const mongoose_2 = require("mongoose");
let FiliereService = class FiliereService {
    constructor(model) {
        this.model = model;
    }
    async create(filiere) {
        try {
            let foundedFiliere = await this.model.countDocuments({ sigle: filiere.sigle, isArchived: false });
            if (foundedFiliere != 0) {
                return { statusCode: common_1.HttpStatus.BAD_REQUEST, message: "La filiere existe deja" };
            }
            return new this.model(Object.assign({}, filiere)).save();
        }
        catch (error) {
            throw new common_1.HttpException({ statusCode: common_1.HttpStatus.BAD_REQUEST, message: error.message }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findAll(query) {
        try {
            return await this.model.find(Object.assign(Object.assign({}, query), { isArchived: false })).populate('entity');
        }
        catch (error) {
            throw new common_1.HttpException({ statusCode: common_1.HttpStatus.BAD_REQUEST, message: error.message }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findOne(id) {
        try {
            return await this.model.findById(id).populate('entity');
        }
        catch (error) {
            throw new common_1.HttpException({ statusCode: common_1.HttpStatus.BAD_REQUEST, message: error.message }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async update(id, updateEntite) {
        try {
            return await this.model.updateOne({ id }, updateEntite);
        }
        catch (error) {
            console.log(error);
            throw new common_1.HttpException({ statusCode: common_1.HttpStatus.BAD_REQUEST, message: error.message }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async remove(id) {
        try {
            let foundedFiliere = await this.model.findById(id);
            foundedFiliere.deletedAt = new Date().toISOString();
            foundedFiliere.isArchived = true;
            await this.model.updateOne({ _id: id }, foundedFiliere);
        }
        catch (error) {
            throw new common_1.HttpException({ statusCode: common_1.HttpStatus.BAD_REQUEST, message: error.message }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
FiliereService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(filiere_dto_1.Filiere.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], FiliereService);
exports.FiliereService = FiliereService;
//# sourceMappingURL=filiere.service.js.map