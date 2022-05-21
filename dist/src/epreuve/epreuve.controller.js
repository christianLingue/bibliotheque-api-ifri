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
exports.EpreuveController = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_2 = require("@nestjs/swagger");
const epreuve_service_1 = require("./epreuve.service");
const epreuve_dto_1 = require("./epreuve.dto");
const platform_express_1 = require("@nestjs/platform-express");
let EpreuveController = class EpreuveController {
    constructor(epreuveService) {
        this.epreuveService = epreuveService;
    }
    create(epreuve, file) {
        console.log({
            file: file,
        });
        return this.epreuveService.create(epreuve);
    }
    findAll(query) {
        return this.epreuveService.findAll(query);
    }
    findOne(id) {
        return this.epreuveService.findOne(id);
    }
    update(id, updatedEpreuve) {
        return this.epreuveService.update(id, updatedEpreuve);
    }
    remove(id) {
        return this.epreuveService.remove(id);
    }
    uploadSomething(file) {
        console.log(file);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [epreuve_dto_1.Epreuve, Object]),
    __metadata("design:returntype", void 0)
], EpreuveController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiQuery)({ type: epreuve_dto_1.Epreuve }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EpreuveController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EpreuveController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, epreuve_dto_1.Epreuve]),
    __metadata("design:returntype", void 0)
], EpreuveController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EpreuveController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('testupload'),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EpreuveController.prototype, "uploadSomething", null);
EpreuveController = __decorate([
    (0, swagger_2.ApiTags)('Epreuve'),
    (0, common_1.Controller)('epreuves'),
    __metadata("design:paramtypes", [epreuve_service_1.EpreuveService])
], EpreuveController);
exports.EpreuveController = EpreuveController;
//# sourceMappingURL=epreuve.controller.js.map