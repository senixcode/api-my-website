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
exports.UpdateRouteInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const Language_1 = require("../../Language");
let UpdateRouteInput = class UpdateRouteInput {
};
__decorate([
    graphql_1.Field((type) => graphql_1.Int),
    __metadata("design:type", Number)
], UpdateRouteInput.prototype, "id", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], UpdateRouteInput.prototype, "path", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], UpdateRouteInput.prototype, "title", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], UpdateRouteInput.prototype, "description", void 0);
__decorate([
    graphql_1.Field(type => Language_1.Language, { nullable: true }),
    __metadata("design:type", String)
], UpdateRouteInput.prototype, "language", void 0);
UpdateRouteInput = __decorate([
    graphql_1.InputType()
], UpdateRouteInput);
exports.UpdateRouteInput = UpdateRouteInput;
//# sourceMappingURL=update-route.input.js.map