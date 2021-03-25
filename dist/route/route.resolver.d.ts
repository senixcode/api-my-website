import { createRouteInput } from './dto/create-route.input';
import { UpdateRouteInput } from './dto/update-route.input';
import { Route } from './entities/route.entity';
import { RouteService } from './route.service';
export declare class RouteResolver {
    private routeService;
    constructor(routeService: RouteService);
    createRoute(createRouteInput: createRouteInput): Promise<Route>;
    findAll(): Promise<Route[]>;
    findOne(id: number): Promise<Route>;
    updateAboutme(updateRouteInput: UpdateRouteInput): Promise<UpdateRouteInput & Route>;
    removeAboutme(id: number): Promise<Route>;
}
