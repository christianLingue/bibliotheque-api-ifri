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
exports.MatiereService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const matiere_dto_1 = require("./matiere.dto");
let MatiereService = class MatiereService {
    constructor(model) {
        this.model = model;
    }
    async create(matiere) {
        try {
            let foundedMatiere = await this.model.countDocuments({ code: matiere.code, isArchived: false });
            if (foundedMatiere != 0) {
                return { statusCode: common_1.HttpStatus.BAD_REQUEST, message: "La matiere existe deja" };
            }
            return new this.model(Object.assign({}, matiere)).save();
        }
        catch (error) {
            throw new common_1.HttpException({ statusCode: common_1.HttpStatus.BAD_REQUEST, message: error.message }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findAll(query) {
        try {
            return await this.model.find(Object.assign(Object.assign({}, query), { isArchived: false })).populate('filiere');
        }
        catch (error) {
            throw new common_1.HttpException({ statusCode: common_1.HttpStatus.BAD_REQUEST, message: error.message }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findOne(id) {
        try {
            return await this.model.findById(id).populate('filiere');
        }
        catch (error) {
            throw new common_1.HttpException({ statusCode: common_1.HttpStatus.BAD_REQUEST, message: error.message }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async update(id, updateMatiere) {
        try {
            return await this.model.updateOne({ id }, updateMatiere);
        }
        catch (error) {
            console.log(error);
            throw new common_1.HttpException({ statusCode: common_1.HttpStatus.BAD_REQUEST, message: error.message }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async remove(id) {
        try {
            let foundedMatiere = await this.model.findById(id);
            foundedMatiere.deletedAt = new Date().toISOString();
            foundedMatiere.isArchived = true;
            await this.model.updateOne({ _id: id }, foundedMatiere);
        }
        catch (error) {
            throw new common_1.HttpException({ statusCode: common_1.HttpStatus.BAD_REQUEST, message: error.message }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
MatiereService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(matiere_dto_1.Matiere.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MatiereService);
exports.MatiereService = MatiereService;
//# sourceMappingURL=matiere.service.js.map