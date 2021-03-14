import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createRouteInput } from './dto/create-route.input';
import { UpdateRouteInput } from './dto/update-route.input';
import { Route } from './entities/route.entity';

@Injectable()
export class RouteService {
  constructor(
    @InjectRepository(Route) private routesRepository: Repository<Route>,
  ) {}
 
  create(createRouteInput: createRouteInput): Promise<Route> {
    const newRoute = this.routesRepository.create(createRouteInput);
    return this.routesRepository.save(newRoute);
  }

  findAll(): Promise<Route[]> {
    return this.routesRepository.find();
  }

  findOne(id: number): Promise<Route> {
    return this.routesRepository.findOneOrFail(id);
  }
  
   async update(updateRouteInput: UpdateRouteInput) {
    return await this.routesRepository.save(updateRouteInput);
    
  }

  async remove(id: number):Promise<Route>{
    const aboutme = await this.findOne(id);
     await this.routesRepository.delete(id)
    return aboutme
  }
}
