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
exports.RouteService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const route_entity_1 = require("./entities/route.entity");
let RouteService = class RouteService {
    constructor(routesRepository) {
        this.routesRepository = routesRepository;
    }
    create(createRouteInput) {
        const newRoute = this.routesRepository.create(createRouteInput);
        return this.routesRepository.save(newRoute);
    }
    findAll() {
        return this.routesRepository.find();
    }
    findOne(id) {
        return this.routesRepository.findOneOrFail(id);
    }
    async update(updateRouteInput) {
        return await this.routesRepository.save(updateRouteInput);
    }
    async remove(id) {
        const aboutme = await this.findOne(id);
        await this.routesRepository.delete(id);
        return aboutme;
    }
};
RouteService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(route_entity_1.Route)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RouteService);
exports.RouteService = RouteService;
//# sourceMappingURL=route.service.js.map