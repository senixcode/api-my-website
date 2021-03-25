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
exports.CreateProjectInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const Language_1 = require("../../Language");
let CreateProjectInput = class CreateProjectInput {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], CreateProjectInput.prototype, "title", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], CreateProjectInput.prototype, "titleSeo", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], CreateProjectInput.prototype, "summary", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], CreateProjectInput.prototype, "description", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], CreateProjectInput.prototype, "topics", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], CreateProjectInput.prototype, "links", void 0);
__decorate([
    graphql_1.Field(type => Language_1.Language),
    __metadata("design:type", String)
], CreateProjectInput.prototype, "language", void 0);
CreateProjectInput = __decorate([
    graphql_1.InputType()
], CreateProjectInput);
exports.CreateProjectInput = CreateProjectInput;
//# sourceMappingURL=create-project.input.js.map