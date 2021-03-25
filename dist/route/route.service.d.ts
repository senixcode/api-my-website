import { Repository } from 'typeorm';
import { createRouteInput } from './dto/create-route.input';
import { UpdateRouteInput } from './dto/update-route.input';
import { Route } from './entities/route.entity';
export declare class RouteService {
    private routesRepository;
    constructor(routesRepository: Repository<Route>);
    create(createRouteInput: createRouteInput): Promise<Route>;
    findAll(): Promise<Route[]>;
    findOne(id: number): Promise<Route>;
    update(updateRouteInput: UpdateRouteInput): Promise<UpdateRouteInput & Route>;
    remove(id: number): Promise<Route>;
}
