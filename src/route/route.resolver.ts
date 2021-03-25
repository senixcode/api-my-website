import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { createRouteInput } from './dto/create-route.input';
import { UpdateRouteInput } from './dto/update-route.input';
import { Route } from './entities/route.entity';
import { RouteService } from './route.service';

@Resolver()
export class RouteResolver {
  constructor(private routeService: RouteService) {}
  @Mutation(() => Route)
  createRoute(
    @Args('createRouteInput') createRouteInput: createRouteInput,
  ): Promise<Route> {
    return this.routeService.create(createRouteInput);
  }

  @Query(() => [Route], { name: 'route' })
  findAll(): Promise<Route[]> {
    return this.routeService.findAll();
  }

  @Query(() => Route, { name: 'routes' })
  findOne(@Args('id', { type: () => Int }) id: number): Promise<Route> {
    return this.routeService.findOne(id);
  }

  @Mutation(() => Route)
  updateAboutme(
    @Args('updateAboutmeInput') updateRouteInput: UpdateRouteInput,
  ) {
    return this.routeService.update(updateRouteInput);
  }

  @Mutation(() => Route)
  removeAboutme(@Args('id', { type: () => Int }) id: number) {
    return this.routeService.remove(id);
  }
}
