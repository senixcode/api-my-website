import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Language } from '../enums/Language';
import { LinksService } from 'src/links/links.service';
import { TopicsService } from 'src/topics/topics.service';
import { Equal, ObjectID, Repository } from 'typeorm';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project) private projectRepository: Repository<Project>,
    private topicsService: TopicsService,
    private linkService: LinksService,
  ) { }

  async create(createProjectInput: CreateProjectInput): Promise<Project> {
    const newProyect = new Project();
    newProyect.title = createProjectInput.title;
    newProyect.titleSeo = createProjectInput.titleSeo;
    newProyect.summary = createProjectInput.summary;
    newProyect.description = createProjectInput.description;
    newProyect.topics = await this.topicsService.findOneByIds(
      createProjectInput.topics,
    );
    newProyect.links = await this.linkService.findOneByIds(
      createProjectInput.links,
    );
    newProyect.language = createProjectInput.language;
    const { _id } = await this.projectRepository.save(newProyect);
    const result = await this.findOne(_id);
    console.log("result", result)
    return result
  }
  // async parseTopic(project: Project): Promise<Project> {
  //   if (project.topics) {
  //     const idsTopics = JSON.parse(project.topics);
  //     project.topicsParse = await this.topicsService.parseTopics(idsTopics);
  //   }
  //   return project;
  // }

  // async parseTopics(projects: Project[]): Promise<Project[]> {
  //   return await Promise.all(
  //     projects.map(async (project: Project) => {
  //       return await this.parseTopic(project);
  //     }),
  //   );
  // }

  // async parseLink(project: Project): Promise<Project> {
  //   if (project.links) {

  //     const idsTopics = JSON.parse(project.links);
  //     project.linksParse = await this.linkService.parseLinks(idsTopics);
  //   }
  //   return project;
  // }

  // async parseLinks(projects: Project[]): Promise<Project[]> {
  //   return await Promise.all(
  //     projects.map(async (project: Project) => {
  //       return await this.parseLink(project);
  //     }),
  //   );
  // }

  // async parseDescription(project: CreateProjectInput | UpdateProjectInput): Promise<Project> {
  //   if (project.description) {
  //     const parseDescriptions: string[] = project.description.match(/([^\.!\?]+[\.!\?]+)|([^\.!\?]+$)/g);
  //     project.descriptionParse = parseDescriptions;
  //   }
  //   return project;
  // }

  // async parseDescriptions(projects: Project[]): Promise<Project[]> {
  //   return await Promise.all(
  //     projects.map(async (project: Project) => {
  //       return await this.parseDescription(project);
  //     }),
  //   );
  // }

  async findAll(): Promise<Project[]> {
    let projects = await this.projectRepository.find();
    // projects = await this.parseTopics(projects);
    // projects = await this.parseLinks(projects);
    // projects = await this.parseDescriptions(projects);
    return projects;
  }

  async findOne(id: ObjectID): Promise<Project> {
    let project = await this.projectRepository.findOneOrFail(id);
    // project = await this.parseTopic(project);
    // project = await this.parseLink(project);
    // project = await this.parseDescription(project);
    return project;
  }

  async findOneByTitleSeo(
    titleSeo: string,
    language?: Language,
  ): Promise<Project> {
    let project = await this.projectRepository.findOne({
      where: { titleSeo, language },
    });
    // project = await this.parseTopic(project);
    // project = await this.parseLink(project);
    // project = await this.parseDescription(project);
    return project;
  }

  async findByLanguage(
    language?: Language,
    all: boolean = false,
  ): Promise<Project[]> {
    if (language) {
      let projects = await this.projectRepository.find({
        language: Equal(language),
      });
      // projects = await this.parseTopics(projects);
      // projects = await this.parseLinks(projects);
      // projects = await this.parseDescriptions(projects);
      return projects;
    }
    if (all) return this.findAll();
  }

  async update(updateProjectInput: UpdateProjectInput) {
    // return await this.projectRepository.save(updateProjectInput);
  }

  async remove(id: ObjectID): Promise<Project> {
    const project = await this.findOne(id);
    await this.projectRepository.delete(id);
    return project;
  }
}
