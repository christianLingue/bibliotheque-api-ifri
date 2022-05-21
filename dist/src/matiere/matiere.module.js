"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatiereModule = void 0;
const common_1 = require("@nestjs/common");
const matiere_service_1 = require("./matiere.service");
const matiere_controller_1 = require("./matiere.controller");
const mongoose_1 = require("@nestjs/mongoose");
const matiere_dto_1 = require("./matiere.dto");
let MatiereModule = class MatiereModule {
};
MatiereModule = __decorate([
    (0, common_1.Module)({
        controllers: [matiere_controller_1.MatiereController],
        providers: [matiere_service_1.MatiereService],
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: matiere_dto_1.Matiere.name, schema: matiere_dto_1.MatiereSchema }])
        ]
    })
], MatiereModule);
exports.MatiereModule = MatiereModule;
//# sourceMappingURL=matiere.module.js.map