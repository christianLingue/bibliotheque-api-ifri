"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntiteModule = void 0;
const common_1 = require("@nestjs/common");
const entite_service_1 = require("./entite.service");
const entite_controller_1 = require("./entite.controller");
const mongoose_1 = require("@nestjs/mongoose");
const entite_dto_1 = require("./entite.dto");
let EntiteModule = class EntiteModule {
};
EntiteModule = __decorate([
    (0, common_1.Module)({
        controllers: [entite_controller_1.EntiteController],
        providers: [entite_service_1.EntiteService],
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: entite_dto_1.Entite.name, schema: entite_dto_1.EntiteSchema }])
        ]
    })
], EntiteModule);
exports.EntiteModule = EntiteModule;
//# sourceMappingURL=entite.module.js.map