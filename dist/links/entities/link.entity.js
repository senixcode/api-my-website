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
exports.Link = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
let Link = class Link {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    graphql_1.Field((type) => graphql_1.Int),
    __metadata("design:type", Number)
], Link.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    graphql_1.Field(),
    __metadata("design:type", String)
], Link.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    graphql_1.Field(),
    __metadata("design:type", String)
], Link.prototype, "href", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], Link.prototype, "icon", void 0);
Link = __decorate([
    typeorm_1.Entity(),
    graphql_1.ObjectType()
], Link);
exports.Link = Link;
//# sourceMappingURL=link.entity.js.map