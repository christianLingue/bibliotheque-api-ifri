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
exports.EntiteController = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_2 = require("@nestjs/swagger");
const entite_dto_1 = require("./entite.dto");
const entite_service_1 = require("./entite.service");
let EntiteController = class EntiteController {
    constructor(entiteService) {
        this.entiteService = entiteService;
    }
    create(entite) {
        return this.entiteService.create(entite);
    }
    findAll(query) {
        return this.entiteService.findAll(query);
    }
    findOne(id) {
        return this.entiteService.findOne(id);
    }
    update(id, updateEntite) {
        return this.entiteService.update(id, updateEntite);
    }
    remove(id) {
        return this.entiteService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBody)({ type: entite_dto_1.Entite }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entite_dto_1.Entite]),
    __metadata("design:returntype", void 0)
], EntiteController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiQuery)({ type: entite_dto_1.Entite }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EntiteController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EntiteController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, entite_dto_1.Entite]),
    __metadata("design:returntype", void 0)
], EntiteController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EntiteController.prototype, "remove", null);
EntiteController = __decorate([
    (0, swagger_2.ApiTags)('Entite'),
    (0, common_1.Controller)('entities'),
    __metadata("design:paramtypes", [entite_service_1.EntiteService])
], EntiteController);
exports.EntiteController = EntiteController;
//# sourceMappingURL=entite.controller.js.map