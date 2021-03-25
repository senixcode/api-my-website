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
exports.ProjectService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Language_1 = require("../Language");
const links_service_1 = require("../links/links.service");
const topics_service_1 = require("../topics/topics.service");
const typeorm_2 = require("typeorm");
const project_entity_1 = require("./entities/project.entity");
let ProjectService = class ProjectService {
    constructor(projectRepository, topicsService, linkService) {
        this.projectRepository = projectRepository;
        this.topicsService = topicsService;
        this.linkService = linkService;
    }
    create(createProjectInput) {
        const newRecord = this.projectRepository.create(createProjectInput);
        return this.projectRepository.save(newRecord);
    }
    async parseTopic(project) {
        const idsTopics = JSON.parse(project.topics);
        project.topicsParse = await this.topicsService.parseTopics(idsTopics);
        return project;
    }
    async parseTopics(projects) {
        return await Promise.all(projects.map(async (project) => {
            return await this.parseTopic(project);
        }));
    }
    async parseLink(project) {
        const idsTopics = JSON.parse(project.links);
        project.linksParse = await this.linkService.parseLinks(idsTopics);
        return project;
    }
    async parseLinks(projects) {
        return await Promise.all(projects.map(async (project) => {
            return await this.parseLink(project);
        }));
    }
    async findAll() {
        let projects = await this.projectRepository.find();
        projects = await this.parseTopics(projects);
        projects = await this.parseLinks(projects);
        return projects;
    }
    async findOne(id) {
        let project = await this.projectRepository.findOneOrFail(id);
        project = await this.parseTopic(project);
        project = await this.parseLink(project);
        return project;
    }
    findByLanguage(language) {
        return this.projectRepository.find({
            language: typeorm_2.Equal(language),
        });
    }
    async update(updateProjectInput) {
        return await this.projectRepository.save(updateProjectInput);
    }
    async remove(id) {
        const project = await this.findOne(id);
        await this.projectRepository.delete(id);
        return project;
    }
};
ProjectService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(project_entity_1.Project)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        topics_service_1.TopicsService,
        links_service_1.LinksService])
], ProjectService);
exports.ProjectService = ProjectService;
//# sourceMappingURL=project.service.js.map