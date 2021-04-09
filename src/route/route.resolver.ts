import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Language } from 'src/enums/Language';
import { CreateRouteInput } from './dto/create-route.input';
import { UpdateRouteInput } from './dto/update-route.input';
import { Route } from './entities/route.entity';
import { RouteService } from './route.service';

@Resolver()
export class RouteResolver {
  constructor(private routeService: RouteService) {}
  @Mutation(() => Route)
  createRoute(
    @Args('createRouteInput') createRouteInput: CreateRouteInput,
  ): Promise<Route> {
    return this.routeService.create(createRouteInput);
  }

  @Query(() => [Route], { name: 'routes' })
  findAll(): Promise<Route[]> {
    return this.routeService.findAll();
  }

  @Query(() => Route, { name: 'route' })
  findOne(@Args('id', { type: () => Int }) id: number): Promise<Route> {
    return this.routeService.findOne(id);
  }

  @Query(() => [Route], { name: 'routeFindByLanguage' })
  findByLanguage(
    @Args('language', { type: () => Language, nullable: true })
    language?: Language,
    @Args('all', { type: () => Boolean, nullable: true }) all?: boolean,
  ) {
    return this.routeService.findByLanguage(language, all);
  }

  @Mutation(() => Route)
  updateRoute(
    @Args('updateRouteInput') updateRouteInput: UpdateRouteInput,
  ) {
    return this.routeService.update(updateRouteInput);
  }

  @Mutation(() => Route)
  removeRoute(@Args('id', { type: () => Int }) id: number) {
    return this.routeService.remove(id);
  }
}
