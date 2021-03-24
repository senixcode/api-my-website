import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Language } from 'src/Language';
import { TopicsService } from 'src/topics/topics.service';
import { Equal, Repository } from 'typeorm';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project) private projectRepository: Repository<Project>,
    private topicsService: TopicsService,
  ) {}

  create(createProjectInput: CreateProjectInput): Promise<Project> {
    const newRecord = this.projectRepository.create(createProjectInput);
    return this.projectRepository.save(newRecord);
  }
  async parseTopic(project: Project): Promise<Project> {
    const idsTopics = JSON.parse(project.topics);
    project.topicsParse = await this.topicsService.parseTopics(idsTopics);
    return project;
  }

  async parseTopics(projects: Project[]): Promise<Project[]> {
    return await Promise.all(
      projects.map(async (project: Project) => {
        return await this.parseTopic(project);
      }),
    );
  }

  findAll(): Promise<Project[]> {
    return this.projectRepository.find();
  }

  findOne(id: number): Promise<Project> {
    return this.projectRepository.findOneOrFail(id);
  }

  findByLanguage(language: Language): Promise<Project[]> {
    return this.projectRepository.find({
      language: Equal(language),
    });
  }

  async update(
    updateProjectInput: UpdateProjectInput,
  ): Promise<UpdateProjectInput & Project> {
    return await this.projectRepository.save(updateProjectInput);
  }

  async remove(id: number): Promise<Project> {
    const project = await this.findOne(id);
    await this.projectRepository.delete(id);
    return project;
  }
}
