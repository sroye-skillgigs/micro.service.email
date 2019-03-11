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
const swagger_1 = require("@nestjs/swagger");
const address_entity_1 = require("./address.entity");
const keyvaluepair_entity_1 = require("./../common/keyvaluepair.entity");
class Email {
}
__decorate([
    swagger_1.ApiModelProperty({
        description: 'Blind Carbon Copy Email Addresses',
        isArray: true,
        required: false,
        type: address_entity_1.Address,
    }),
    __metadata("design:type", Array)
], Email.prototype, "bccAddresses", void 0);
__decorate([
    swagger_1.ApiModelProperty({
        description: 'From Email Address',
        required: false,
        type: address_entity_1.Address,
    }),
    __metadata("design:type", address_entity_1.Address)
], Email.prototype, "fromAddress", void 0);
__decorate([
    swagger_1.ApiModelProperty({
        description: 'Merge Variables',
        isArray: true,
        required: false,
        type: keyvaluepair_entity_1.KeyValuePair,
    }),
    __metadata("design:type", Array)
], Email.prototype, "mergeVars", void 0);
__decorate([
    swagger_1.ApiModelProperty({
        description: 'Subject',
        required: false,
        type: String,
    }),
    __metadata("design:type", String)
], Email.prototype, "subject", void 0);
__decorate([
    swagger_1.ApiModelProperty({
        description: 'Template Name',
        required: false,
        type: String,
    }),
    __metadata("design:type", String)
], Email.prototype, "templateName", void 0);
__decorate([
    swagger_1.ApiModelProperty({
        description: 'To Email Addresses',
        isArray: true,
        required: false,
        type: address_entity_1.Address,
    }),
    __metadata("design:type", Array)
], Email.prototype, "toAddresses", void 0);
exports.Email = Email;
//# sourceMappingURL=email.entity.js.map