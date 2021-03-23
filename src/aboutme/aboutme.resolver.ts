import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AboutmeService } from './aboutme.service';
import { Aboutme } from './entities/aboutme.entity';
import { CreateAboutmeInput } from './dto/create-aboutme.input';
import { UpdateAboutmeInput } from './dto/update-aboutme.input';
import { Language } from 'src/Language';

@Resolver(() => Aboutme)
export class AboutmeResolver {
  constructor(private readonly aboutmeService: AboutmeService) {}

  @Mutation(() => Aboutme)
  createAboutme(
    @Args('createAboutmeInput') createAboutmeInput: CreateAboutmeInput,
  ) {
    return this.aboutmeService.create(createAboutmeInput);
  }

  @Query(() => [Aboutme], { name: 'allAboutMe' })
  findAll() {
    return this.aboutmeService.findAll();
  }

  @Query(() => [Aboutme], { name: 'aboutMe' })
  findOne(@Args('language', { type: () => Language }) language: Language) {
    return this.aboutmeService.findOne(language);
  }

  @Mutation(() => Aboutme)
  updateAboutme(
    @Args('updateAboutmeInput') updateAboutmeInput: UpdateAboutmeInput,
  ) {
    return this.aboutmeService.update(updateAboutmeInput);
  }

  @Mutation(() => Aboutme)
  removeAboutme(@Args('id', { type: () => Int }) id: number) {
    return this.aboutmeService.remove(id);
  }
}
