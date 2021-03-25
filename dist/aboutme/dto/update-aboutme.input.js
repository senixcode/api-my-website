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
exports.UpdateAboutmeInput = void 0;
const create_aboutme_input_1 = require("./create-aboutme.input");
const graphql_1 = require("@nestjs/graphql");
const Language_1 = require("../../Language");
let UpdateAboutmeInput = class UpdateAboutmeInput extends graphql_1.PartialType(create_aboutme_input_1.CreateAboutmeInput) {
};
__decorate([
    graphql_1.Field((type) => graphql_1.Int),
    __metadata("design:type", Number)
], UpdateAboutmeInput.prototype, "id", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], UpdateAboutmeInput.prototype, "name", void 0);
__decorate([
    graphql_1.Field(type => Language_1.Language, { nullable: true }),
    __metadata("design:type", String)
], UpdateAboutmeInput.prototype, "language", void 0);
UpdateAboutmeInput = __decorate([
    graphql_1.InputType()
], UpdateAboutmeInput);
exports.UpdateAboutmeInput = UpdateAboutmeInput;
//# sourceMappingURL=update-aboutme.input.js.map