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
exports.erc1484Controller = void 0;
const common_1 = require("@nestjs/common");
const erc1484_service_1 = require("./erc1484.service");
let erc1484Controller = class erc1484Controller {
    constructor(erc1484Ser) {
        this.erc1484Ser = erc1484Ser;
    }
    getIdentity(id) {
        return this.erc1484Ser.getIdentity(id);
    }
    getAssociated(id, add) {
        return this.erc1484Ser.getAssociatedAddress(id, add);
    }
    createIdentity(recovery, providers, resolvers) {
        return this.erc1484Ser.createIdentity(resolvers, providers, recovery);
    }
    createIdentityDele(recovery, providers, resolvers) {
        return this.erc1484Ser.createIdentityDelegated(resolvers, providers, recovery);
    }
    addAssociated(address) {
        return this.erc1484Ser.addAssAddress(address);
    }
    triggerDestroy(ein, clear) {
        return this.erc1484Ser.triggerDes(ein, clear);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Body('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], erc1484Controller.prototype, "getIdentity", null);
__decorate([
    common_1.Get('associated'),
    __param(0, common_1.Body('id')),
    __param(1, common_1.Body('address')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], erc1484Controller.prototype, "getAssociated", null);
__decorate([
    common_1.Post('create'),
    __param(0, common_1.Body('recovery')),
    __param(1, common_1.Body('providers')),
    __param(2, common_1.Body('resolvers')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], erc1484Controller.prototype, "createIdentity", null);
__decorate([
    common_1.Post('createDelegated'),
    __param(0, common_1.Body('recovery')),
    __param(1, common_1.Body('providers')),
    __param(2, common_1.Body('resolvers')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], erc1484Controller.prototype, "createIdentityDele", null);
__decorate([
    common_1.Post('addAssociated'),
    __param(0, common_1.Body('address')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], erc1484Controller.prototype, "addAssociated", null);
__decorate([
    common_1.Post('triggerDestroy'),
    __param(0, common_1.Body('ein')),
    __param(1, common_1.Body('clear')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Boolean]),
    __metadata("design:returntype", void 0)
], erc1484Controller.prototype, "triggerDestroy", null);
erc1484Controller = __decorate([
    common_1.Controller('erc1484'),
    __metadata("design:paramtypes", [erc1484_service_1.erc1484Service])
], erc1484Controller);
exports.erc1484Controller = erc1484Controller;
//# sourceMappingURL=erc1484.controller.js.map