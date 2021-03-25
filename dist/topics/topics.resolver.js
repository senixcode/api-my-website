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
exports.TopicsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const topics_service_1 = require("./topics.service");
const topic_entity_1 = require("./entities/topic.entity");
const create_topic_input_1 = require("./dto/create-topic.input");
const update_topic_input_1 = require("./dto/update-topic.input");
let TopicsResolver = class TopicsResolver {
    constructor(topicsService) {
        this.topicsService = topicsService;
    }
    createTopic(createTopicInput) {
        return this.topicsService.create(createTopicInput);
    }
    findAll() {
        return this.topicsService.findAll();
    }
    findOne(id) {
        return this.topicsService.findOne(id);
    }
    updateTopic(updateTopicInput) {
        return this.topicsService.update(updateTopicInput);
    }
    removeTopic(id) {
        return this.topicsService.remove(id);
    }
};
__decorate([
    graphql_1.Mutation(() => topic_entity_1.Topic),
    __param(0, graphql_1.Args('createTopicInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_topic_input_1.CreateTopicInput]),
    __metadata("design:returntype", void 0)
], TopicsResolver.prototype, "createTopic", null);
__decorate([
    graphql_1.Query(() => [topic_entity_1.Topic], { name: 'topics' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TopicsResolver.prototype, "findAll", null);
__decorate([
    graphql_1.Query(() => topic_entity_1.Topic, { name: 'topic' }),
    __param(0, graphql_1.Args('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TopicsResolver.prototype, "findOne", null);
__decorate([
    graphql_1.Mutation(() => topic_entity_1.Topic),
    __param(0, graphql_1.Args('updateTopicInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_topic_input_1.UpdateTopicInput]),
    __metadata("design:returntype", void 0)
], TopicsResolver.prototype, "updateTopic", null);
__decorate([
    graphql_1.Mutation(() => topic_entity_1.Topic),
    __param(0, graphql_1.Args('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TopicsResolver.prototype, "removeTopic", null);
TopicsResolver = __decorate([
    graphql_1.Resolver(() => topic_entity_1.Topic),
    __metadata("design:paramtypes", [topics_service_1.TopicsService])
], TopicsResolver);
exports.TopicsResolver = TopicsResolver;
//# sourceMappingURL=topics.resolver.js.map