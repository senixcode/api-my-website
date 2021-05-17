import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { LinksService } from './links.service';
import { Link } from './entities/link.entity';
import { CreateLinkInput } from './dto/create-link.input';
import { UpdateLinkInput } from './dto/update-link.input';
import { ObjectID } from 'typeorm';

@Resolver(() => Link)
export class LinksResolver {
  constructor(private readonly linksService: LinksService) {}

  @Mutation(() => Link)
  createLink(@Args('createLinkInput') createLinkInput: CreateLinkInput) {
    return this.linksService.create(createLinkInput);
  }

  @Query(() => [Link], { name: 'links' })
  findAll() {
    return this.linksService.findAll();
  }

  @Query(() => Link, { name: 'link' })
  findOne(@Args('id', { type: () => ID }) id: ObjectID) {
    return this.linksService.findOne(id);
  }

  @Mutation(() => Link)
  updateLink(@Args('updateLinkInput') updateLinkInput: UpdateLinkInput) {
    return this.linksService.update(updateLinkInput);
  }

  @Mutation(() => Link)
  removeLink(@Args('id', { type: () => ID }) id: ObjectID) {
    return this.linksService.remove(id);
  }
}
