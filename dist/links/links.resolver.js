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
exports.LinksResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const links_service_1 = require("./links.service");
const link_entity_1 = require("./entities/link.entity");
const create_link_input_1 = require("./dto/create-link.input");
const update_link_input_1 = require("./dto/update-link.input");
let LinksResolver = class LinksResolver {
    constructor(linksService) {
        this.linksService = linksService;
    }
    createLink(createLinkInput) {
        return this.linksService.create(createLinkInput);
    }
    findAll() {
        return this.linksService.findAll();
    }
    findOne(id) {
        return this.linksService.findOne(id);
    }
    updateLink(updateLinkInput) {
        return this.linksService.update(updateLinkInput);
    }
    removeLink(id) {
        return this.linksService.remove(id);
    }
};
__decorate([
    graphql_1.Mutation(() => link_entity_1.Link),
    __param(0, graphql_1.Args('createLinkInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_link_input_1.CreateLinkInput]),
    __metadata("design:returntype", void 0)
], LinksResolver.prototype, "createLink", null);
__decorate([
    graphql_1.Query(() => [link_entity_1.Link], { name: 'links' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LinksResolver.prototype, "findAll", null);
__decorate([
    graphql_1.Query(() => link_entity_1.Link, { name: 'link' }),
    __param(0, graphql_1.Args('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LinksResolver.prototype, "findOne", null);
__decorate([
    graphql_1.Mutation(() => link_entity_1.Link),
    __param(0, graphql_1.Args('updateLinkInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_link_input_1.UpdateLinkInput]),
    __metadata("design:returntype", void 0)
], LinksResolver.prototype, "updateLink", null);
__decorate([
    graphql_1.Mutation(() => link_entity_1.Link),
    __param(0, graphql_1.Args('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LinksResolver.prototype, "removeLink", null);
LinksResolver = __decorate([
    graphql_1.Resolver(() => link_entity_1.Link),
    __metadata("design:paramtypes", [links_service_1.LinksService])
], LinksResolver);
exports.LinksResolver = LinksResolver;
//# sourceMappingURL=links.resolver.js.map