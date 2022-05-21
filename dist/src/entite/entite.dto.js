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
exports.EntiteSchema = exports.Entite = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
let Entite = class Entite {
};
__decorate([
    (0, mongoose_1.Prop)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'IFRI'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Entite.prototype, "sigle", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Institut de Formation et de Recherche en Informatique'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Entite.prototype, "libelle", void 0);
Entite = __decorate([
    (0, mongoose_1.Schema)()
], Entite);
exports.Entite = Entite;
exports.EntiteSchema = mongoose_1.SchemaFactory.createForClass(Entite);
//# sourceMappingURL=entite.dto.js.map