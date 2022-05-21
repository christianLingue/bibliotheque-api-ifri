"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpreuveModule = void 0;
const common_1 = require("@nestjs/common");
const epreuve_service_1 = require("./epreuve.service");
const epreuve_controller_1 = require("./epreuve.controller");
const mongoose_1 = require("@nestjs/mongoose");
const epreuve_dto_1 = require("./epreuve.dto");
let EpreuveModule = class EpreuveModule {
};
EpreuveModule = __decorate([
    (0, common_1.Module)({
        controllers: [epreuve_controller_1.EpreuveController],
        providers: [epreuve_service_1.EpreuveService],
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: epreuve_dto_1.Epreuve.name, schema: epreuve_dto_1.EpreuveSchema }])
        ]
    })
], EpreuveModule);
exports.EpreuveModule = EpreuveModule;
//# sourceMappingURL=epreuve.module.js.map