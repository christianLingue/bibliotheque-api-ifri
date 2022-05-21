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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpreuveSchema = exports.Epreuve = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
let Epreuve = class Epreuve {
};
__decorate([
    (0, mongoose_2.Prop)({ required: true }),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Partiel de Programation Java'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Epreuve.prototype, "designation", void 0);
__decorate([
    (0, mongoose_2.Prop)({ required: true }),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Link of the file'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Epreuve.prototype, "epreuve", void 0);
__decorate([
    (0, mongoose_2.Prop)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Link of the file'
    }),
    __metadata("design:type", String)
], Epreuve.prototype, "corrige", void 0);
__decorate([
    (0, mongoose_2.Prop)({
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Matiere',
        required: true
    }),
    (0, swagger_1.ApiPropertyOptional)({
        required: true,
        example: 'Should be an Id of an existing Matiere'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Epreuve.prototype, "matiere", void 0);
__decorate([
    (0, mongoose_2.Prop)(),
    (0, swagger_1.ApiPropertyOptional)({
        required: true,
        example: 'L3'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Epreuve.prototype, "class", void 0);
Epreuve = __decorate([
    (0, mongoose_2.Schema)({ timestamps: true })
], Epreuve);
exports.Epreuve = Epreuve;
exports.EpreuveSchema = mongoose_2.SchemaFactory.createForClass(Epreuve);
//# sourceMappingURL=epreuve.dto.js.map