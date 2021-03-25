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
exports.RouteResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const Language_1 = require("../Language");
const create_route_input_1 = require("./dto/create-route.input");
const update_route_input_1 = require("./dto/update-route.input");
const route_entity_1 = require("./entities/route.entity");
const route_service_1 = require("./route.service");
let RouteResolver = class RouteResolver {
    constructor(routeService) {
        this.routeService = routeService;
    }
    createRoute(createRouteInput) {
        return this.routeService.create(createRouteInput);
    }
    findAll() {
        return this.routeService.findAll();
    }
    findOne(id) {
        return this.routeService.findOne(id);
    }
    findByLanguage(language) {
        return this.routeService.findByLanguage(language);
    }
    updateAboutme(updateRouteInput) {
        return this.routeService.update(updateRouteInput);
    }
    removeAboutme(id) {
        return this.routeService.remove(id);
    }
};
__decorate([
    graphql_1.Mutation(() => route_entity_1.Route),
    __param(0, graphql_1.Args('createRouteInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_route_input_1.createRouteInput]),
    __metadata("design:returntype", Promise)
], RouteResolver.prototype, "createRoute", null);
__decorate([
    graphql_1.Query(() => [route_entity_1.Route], { name: 'routes' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RouteResolver.prototype, "findAll", null);
__decorate([
    graphql_1.Query(() => route_entity_1.Route, { name: 'route' }),
    __param(0, graphql_1.Args('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RouteResolver.prototype, "findOne", null);
__decorate([
    graphql_1.Query(() => [route_entity_1.Route], { name: 'routeFindByLanguage' }),
    __param(0, graphql_1.Args('language', { type: () => Language_1.Language })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RouteResolver.prototype, "findByLanguage", null);
__decorate([
    graphql_1.Mutation(() => route_entity_1.Route),
    __param(0, graphql_1.Args('updateAboutmeInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_route_input_1.UpdateRouteInput]),
    __metadata("design:returntype", void 0)
], RouteResolver.prototype, "updateAboutme", null);
__decorate([
    graphql_1.Mutation(() => route_entity_1.Route),
    __param(0, graphql_1.Args('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RouteResolver.prototype, "removeAboutme", null);
RouteResolver = __decorate([
    graphql_1.Resolver(),
    __metadata("design:paramtypes", [route_service_1.RouteService])
], RouteResolver);
exports.RouteResolver = RouteResolver;
//# sourceMappingURL=route.resolver.js.map