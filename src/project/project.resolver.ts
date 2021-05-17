import { Resolver, Query, Mutation, Args, ID, ResolveProperty, Root, Parent, ResolveField } from '@nestjs/graphql';
import { ProjectService } from './project.service';
import { Project } from './entities/project.entity';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { Language } from '../enums/Language';
import { ObjectID } from 'typeorm';


@Resolver(() => Project)
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) { }

  @Mutation(() => Project)
  async createProject(
    @Args('createProjectInput') createProjectInput: CreateProjectInput,
  ) {
    return await this.projectService.create(createProjectInput);
  }

  @Query(() => [Project], { name: 'projects' })
  async findAll() {
    return await this.projectService.findAll();
  }

  @Query(() => Project, { name: 'project' })
  async findOne(@Args('id', { type: () => ID }) id: ObjectID) {
    return await this.projectService.findOne(id);
  }

  @Query(() => Project, { name: 'projectFindByTitleSeo' })
  async findOneByTitleSeo(
    @Args('titleSeo', { type: () => String }) titleSeo: string,
    @Args('language', { type: () => Language, nullable: true })
    language?: Language,
  ) {
    return await this.projectService.findOneByTitleSeo(titleSeo, language);
  }

  @Query(() => [Project], { name: 'projectFinByLanguage' })
  findByLanguage(
    @Args('language', { type: () => Language, nullable: true })
    language?: Language,
    @Args('all', { type: () => Boolean, nullable: true }) all?: boolean,
  ) {
    return this.projectService.findByLanguage(language, all);
  }

  @Mutation(() => Project)
  updateProject(
    @Args('updateProjectInput') updateProjectInput: UpdateProjectInput,
  ) {
    return this.projectService.update(updateProjectInput);
  }

  @Mutation(() => Project)
  removeProject(@Args('id', { type: () => ID }) id: ObjectID) {
    return this.projectService.remove(id);
  }

  // @ResolveField()
  // projects(@Parent() project: Project) {
  //   console.log(project)
  //   return project
  // }
}
