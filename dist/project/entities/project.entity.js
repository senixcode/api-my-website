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
exports.Project = void 0;
const graphql_1 = require("@nestjs/graphql");
const Language_1 = require("../../Language");
const link_entity_1 = require("../../links/entities/link.entity");
const topic_entity_1 = require("../../topics/entities/topic.entity");
const typeorm_1 = require("typeorm");
let Project = class Project {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    graphql_1.Field((type) => graphql_1.Int),
    __metadata("design:type", Number)
], Project.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    graphql_1.Field(),
    __metadata("design:type", String)
], Project.prototype, "title", void 0);
__decorate([
    typeorm_1.Column(),
    graphql_1.Field(),
    __metadata("design:type", String)
], Project.prototype, "titleSeo", void 0);
__decorate([
    typeorm_1.Column(),
    graphql_1.Field(),
    __metadata("design:type", String)
], Project.prototype, "summary", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], Project.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], Project.prototype, "topics", void 0);
__decorate([
    graphql_1.Field(type => [topic_entity_1.Topic], { nullable: "itemsAndList" }),
    __metadata("design:type", Array)
], Project.prototype, "topicsParse", void 0);
__decorate([
    graphql_1.Field(type => [link_entity_1.Link], { nullable: "itemsAndList" }),
    __metadata("design:type", Array)
], Project.prototype, "linksParse", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], Project.prototype, "links", void 0);
__decorate([
    typeorm_1.Column(),
    graphql_1.Field(type => Language_1.Language),
    __metadata("design:type", String)
], Project.prototype, "language", void 0);
Project = __decorate([
    typeorm_1.Entity(),
    graphql_1.ObjectType()
], Project);
exports.Project = Project;
//# sourceMappingURL=project.entity.js.map