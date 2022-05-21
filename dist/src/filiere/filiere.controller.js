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
exports.FiliereController = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_2 = require("@nestjs/swagger");
const filiere_service_1 = require("./filiere.service");
const filiere_dto_1 = require("./filiere.dto");
let FiliereController = class FiliereController {
    constructor(filiereService) {
        this.filiereService = filiereService;
    }
    create(filiere) {
        return this.filiereService.create(filiere);
    }
    findAll(query) {
        return this.filiereService.findAll(query);
    }
    findOne(id) {
        return this.filiereService.findOne(id);
    }
    update(id, updatedFiliere) {
        return this.filiereService.update(id, updatedFiliere);
    }
    remove(id) {
        return this.filiereService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filiere_dto_1.Filiere]),
    __metadata("design:returntype", void 0)
], FiliereController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiQuery)({ type: filiere_dto_1.Filiere }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FiliereController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FiliereController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, filiere_dto_1.Filiere]),
    __metadata("design:returntype", void 0)
], FiliereController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FiliereController.prototype, "remove", null);
FiliereController = __decorate([
    (0, swagger_2.ApiTags)('Filiere'),
    (0, common_1.Controller)('filieres'),
    __metadata("design:paramtypes", [filiere_service_1.FiliereService])
], FiliereController);
exports.FiliereController = FiliereController;
//# sourceMappingURL=filiere.controller.js.map