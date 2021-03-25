"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("@nestjs/typeorm");
const route_module_1 = require("./route/route.module");
const aboutme_module_1 = require("./aboutme/aboutme.module");
const project_module_1 = require("./project/project.module");
const topics_module_1 = require("./topics/topics.module");
const links_module_1 = require("./links/links.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                autoSchemaFile: true,
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'sqlite',
                database: 'db.sqlite3',
                entities: ['dist/**/*.entity{.ts,.js}'],
                synchronize: true,
            }),
            route_module_1.RouteModule,
            aboutme_module_1.AboutmeModule,
            project_module_1.ProjectModule,
            topics_module_1.TopicsModule,
            links_module_1.LinksModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map