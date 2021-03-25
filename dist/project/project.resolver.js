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
exports.ProjectResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const project_service_1 = require("./project.service");
const project_entity_1 = require("./entities/project.entity");
const create_project_input_1 = require("./dto/create-project.input");
const update_project_input_1 = require("./dto/update-project.input");
const Language_1 = require("../Language");
let ProjectResolver = class ProjectResolver {
    constructor(projectService) {
        this.projectService = projectService;
    }
    createProject(createProjectInput) {
        return this.projectService.create(createProjectInput);
    }
    async findAll() {
        return await this.projectService.findAll();
    }
    async findOne(id) {
        return await this.projectService.findOne(id);
    }
    findByLanguage(language) {
        return this.projectService.findByLanguage(language);
    }
    updateProject(updateProjectInput) {
        return this.projectService.update(updateProjectInput);
    }
    removeProject(id) {
        return this.projectService.remove(id);
    }
};
__decorate([
    graphql_1.Mutation(() => project_entity_1.Project),
    __param(0, graphql_1.Args('createProjectInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_project_input_1.CreateProjectInput]),
    __metadata("design:returntype", void 0)
], ProjectResolver.prototype, "createProject", null);
__decorate([
    graphql_1.Query(() => [project_entity_1.Project], { name: 'projects' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProjectResolver.prototype, "findAll", null);
__decorate([
    graphql_1.Query(() => project_entity_1.Project, { name: 'project' }),
    __param(0, graphql_1.Args('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProjectResolver.prototype, "findOne", null);
__decorate([
    graphql_1.Query(() => [project_entity_1.Project], { name: 'projectFinByLanguage' }),
    __param(0, graphql_1.Args('language', { type: () => Language_1.Language })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProjectResolver.prototype, "findByLanguage", null);
__decorate([
    graphql_1.Mutation(() => project_entity_1.Project),
    __param(0, graphql_1.Args('updateProjectInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_project_input_1.UpdateProjectInput]),
    __metadata("design:returntype", void 0)
], ProjectResolver.prototype, "updateProject", null);
__decorate([
    graphql_1.Mutation(() => project_entity_1.Project),
    __param(0, graphql_1.Args('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProjectResolver.prototype, "removeProject", null);
ProjectResolver = __decorate([
    graphql_1.Resolver(() => project_entity_1.Project),
    __metadata("design:paramtypes", [project_service_1.ProjectService])
], ProjectResolver);
exports.ProjectResolver = ProjectResolver;
//# sourceMappingURL=project.resolver.js.map