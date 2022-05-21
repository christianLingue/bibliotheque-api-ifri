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
exports.FiliereSchema = exports.Filiere = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const mongoose_2 = require("mongoose");
let Filiere = class Filiere {
};
__decorate([
    (0, mongoose_1.Prop)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'IM',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Filiere.prototype, "sigle", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Internet et Multimedia'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Filiere.prototype, "libelle", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        required: true,
        type: 'string',
        description: 'Should be an Id of an existing Entity'
    }),
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.Schema.Types.ObjectId,
        ref: 'Entite',
    }),
    __metadata("design:type", String)
], Filiere.prototype, "entity", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, swagger_1.ApiPropertyOptional)({
        required: true,
        example: '2019'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Filiere.prototype, "promotion", void 0);
Filiere = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Filiere);
exports.Filiere = Filiere;
exports.FiliereSchema = mongoose_1.SchemaFactory.createForClass(Filiere);
//# sourceMappingURL=filiere.dto.js.map