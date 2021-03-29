import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProjectService } from './project.service';
import { Project } from './entities/project.entity';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { Language } from 'src/Language';

@Resolver(() => Project)
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) {}

  @Mutation(() => Project)
  createProject(
    @Args('createProjectInput') createProjectInput: CreateProjectInput,
  ) {
    return this.projectService.create(createProjectInput);
  }

  @Query(() => [Project], { name: 'projects' })
  async findAll() {
    return await this.projectService.findAll();
  }

  @Query(() => Project, { name: 'project' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return await this.projectService.findOne(id);
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
  removeProject(@Args('id', { type: () => Int }) id: number) {
    return this.projectService.remove(id);
  }
}
