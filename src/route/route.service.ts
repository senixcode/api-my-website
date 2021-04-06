import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Language } from 'src/Language';
import { Equal, Repository } from 'typeorm';
import { CreateRouteInput } from './dto/create-route.input';
import { UpdateRouteInput } from './dto/update-route.input';
import { Route } from './entities/route.entity';

@Injectable()
export class RouteService {
  constructor(
    @InjectRepository(Route) private routesRepository: Repository<Route>,
  ) {}

  create(createRouteInput: CreateRouteInput): Promise<Route> {
    const newRoute = this.routesRepository.create(createRouteInput);
    return this.routesRepository.save(newRoute);
  }

  findAll(): Promise<Route[]> {
    return this.routesRepository.find();
  }

  findOne(id: number): Promise<Route> {
    return this.routesRepository.findOneOrFail(id);
  }

  findByLanguage(language?: Language, all: boolean = false): Promise<Route[]> {
    if (language) {
      return this.routesRepository.find({
        language: Equal(language),
      });
    }
    if (all) return this.findAll();
  }

  async update(updateRouteInput: UpdateRouteInput) {
    return await this.routesRepository.save(updateRouteInput);
  }

  async remove(id: number): Promise<Route> {
    const aboutme = await this.findOne(id);
    await this.routesRepository.delete(id);
    return aboutme;
  }
}
