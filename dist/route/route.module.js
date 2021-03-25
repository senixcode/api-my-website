"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const route_entity_1 = require("./entities/route.entity");
const route_resolver_1 = require("./route.resolver");
const route_service_1 = require("./route.service");
let RouteModule = class RouteModule {
};
RouteModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([route_entity_1.Route])],
        providers: [route_resolver_1.RouteResolver, route_service_1.RouteService],
    })
], RouteModule);
exports.RouteModule = RouteModule;
//# sourceMappingURL=route.module.js.map