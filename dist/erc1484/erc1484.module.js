"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.erc1484Module = void 0;
const common_1 = require("@nestjs/common");
const erc1484_controller_1 = require("./erc1484.controller");
const erc1484_service_1 = require("./erc1484.service");
let erc1484Module = class erc1484Module {
};
erc1484Module = __decorate([
    common_1.Module({
        controllers: [erc1484_controller_1.erc1484Controller],
        providers: [erc1484_service_1.erc1484Service],
    })
], erc1484Module);
exports.erc1484Module = erc1484Module;
//# sourceMappingURL=erc1484.module.js.map