"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinksModule = void 0;
const common_1 = require("@nestjs/common");
const links_service_1 = require("./links.service");
const links_resolver_1 = require("./links.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const link_entity_1 = require("./entities/link.entity");
let LinksModule = class LinksModule {
};
LinksModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([link_entity_1.Link])],
        providers: [links_resolver_1.LinksResolver, links_service_1.LinksService],
        exports: [links_service_1.LinksService]
    })
], LinksModule);
exports.LinksModule = LinksModule;
//# sourceMappingURL=links.module.js.map