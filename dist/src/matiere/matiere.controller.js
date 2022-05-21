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
exports.MatiereController = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_2 = require("@nestjs/swagger");
const matiere_dto_1 = require("./matiere.dto");
const matiere_service_1 = require("./matiere.service");
let MatiereController = class MatiereController {
    constructor(matiereService) {
        this.matiereService = matiereService;
    }
    create(matiere) {
        return this.matiereService.create(matiere);
    }
    findAll(query) {
        return this.matiereService.findAll(query);
    }
    findOne(id) {
        return this.matiereService.findOne(id);
    }
    update(id, updatedMatiere) {
        return this.matiereService.update(id, updatedMatiere);
    }
    remove(id) {
        return this.matiereService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [matiere_dto_1.Matiere]),
    __metadata("design:returntype", void 0)
], MatiereController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiQuery)({ type: matiere_dto_1.Matiere }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MatiereController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MatiereController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, matiere_dto_1.Matiere]),
    __metadata("design:returntype", void 0)
], MatiereController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MatiereController.prototype, "remove", null);
MatiereController = __decorate([
    (0, swagger_2.ApiTags)('Matiere'),
    (0, common_1.Controller)('matieres'),
    __metadata("design:paramtypes", [matiere_service_1.MatiereService])
], MatiereController);
exports.MatiereController = MatiereController;
//# sourceMappingURL=matiere.controller.js.map