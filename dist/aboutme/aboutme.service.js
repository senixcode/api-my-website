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
exports.AboutmeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Language_1 = require("../Language");
const typeorm_2 = require("typeorm");
const aboutme_entity_1 = require("./entities/aboutme.entity");
let AboutmeService = class AboutmeService {
    constructor(aboutmeRepository) {
        this.aboutmeRepository = aboutmeRepository;
    }
    create(createAboutmeInput) {
        const newRecord = this.aboutmeRepository.create(createAboutmeInput);
        return this.aboutmeRepository.save(newRecord);
    }
    findAll() {
        return this.aboutmeRepository.find();
    }
    findOne(id) {
        return this.aboutmeRepository.findOneOrFail(id);
    }
    findByLanguage(language) {
        return this.aboutmeRepository.find({
            language: typeorm_2.Equal(language),
        });
    }
    async update(updateAboutmeInput) {
        return await this.aboutmeRepository.save(updateAboutmeInput);
    }
    async remove(id) {
        const aboutme = await this.aboutmeRepository.findOneOrFail(id);
        await this.aboutmeRepository.delete(id);
        return aboutme;
    }
};
AboutmeService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(aboutme_entity_1.Aboutme)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AboutmeService);
exports.AboutmeService = AboutmeService;
//# sourceMappingURL=aboutme.service.js.map