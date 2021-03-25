"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicsModule = void 0;
const common_1 = require("@nestjs/common");
const topics_service_1 = require("./topics.service");
const topics_resolver_1 = require("./topics.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const topic_entity_1 = require("./entities/topic.entity");
let TopicsModule = class TopicsModule {
};
TopicsModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([topic_entity_1.Topic])],
        providers: [topics_resolver_1.TopicsResolver, topics_service_1.TopicsService],
        exports: [topics_service_1.TopicsService]
    })
], TopicsModule);
exports.TopicsModule = TopicsModule;
//# sourceMappingURL=topics.module.js.map