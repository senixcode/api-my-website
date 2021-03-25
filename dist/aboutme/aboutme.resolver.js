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
exports.AboutmeResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const aboutme_service_1 = require("./aboutme.service");
const aboutme_entity_1 = require("./entities/aboutme.entity");
const create_aboutme_input_1 = require("./dto/create-aboutme.input");
const update_aboutme_input_1 = require("./dto/update-aboutme.input");
const Language_1 = require("../Language");
let AboutmeResolver = class AboutmeResolver {
    constructor(aboutmeService) {
        this.aboutmeService = aboutmeService;
    }
    createAboutme(createAboutmeInput) {
        return this.aboutmeService.create(createAboutmeInput);
    }
    findAll() {
        return this.aboutmeService.findAll();
    }
    findOne(id) {
        return this.aboutmeService.findOne(id);
    }
    findByLanguage(language) {
        return this.aboutmeService.findByLanguage(language);
    }
    updateAboutme(updateAboutmeInput) {
        return this.aboutmeService.update(updateAboutmeInput);
    }
    removeAboutme(id) {
        return this.aboutmeService.remove(id);
    }
};
__decorate([
    graphql_1.Mutation(() => aboutme_entity_1.Aboutme),
    __param(0, graphql_1.Args('createAboutmeInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_aboutme_input_1.CreateAboutmeInput]),
    __metadata("design:returntype", void 0)
], AboutmeResolver.prototype, "createAboutme", null);
__decorate([
    graphql_1.Query(() => [aboutme_entity_1.Aboutme], { name: 'allAboutMe' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AboutmeResolver.prototype, "findAll", null);
__decorate([
    graphql_1.Query(() => aboutme_entity_1.Aboutme, { name: 'aboutMe' }),
    __param(0, graphql_1.Args('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AboutmeResolver.prototype, "findOne", null);
__decorate([
    graphql_1.Query(() => [aboutme_entity_1.Aboutme], { name: 'aboutMeFindByLanguage' }),
    __param(0, graphql_1.Args('language', { type: () => Language_1.Language })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AboutmeResolver.prototype, "findByLanguage", null);
__decorate([
    graphql_1.Mutation(() => aboutme_entity_1.Aboutme),
    __param(0, graphql_1.Args('updateAboutmeInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_aboutme_input_1.UpdateAboutmeInput]),
    __metadata("design:returntype", void 0)
], AboutmeResolver.prototype, "updateAboutme", null);
__decorate([
    graphql_1.Mutation(() => aboutme_entity_1.Aboutme),
    __param(0, graphql_1.Args('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AboutmeResolver.prototype, "removeAboutme", null);
AboutmeResolver = __decorate([
    graphql_1.Resolver(() => aboutme_entity_1.Aboutme),
    __metadata("design:paramtypes", [aboutme_service_1.AboutmeService])
], AboutmeResolver);
exports.AboutmeResolver = AboutmeResolver;
//# sourceMappingURL=aboutme.resolver.js.map