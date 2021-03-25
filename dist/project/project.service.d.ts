import { Language } from 'src/Language';
import { LinksService } from 'src/links/links.service';
import { TopicsService } from 'src/topics/topics.service';
import { Repository } from 'typeorm';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { Project } from './entities/project.entity';
export declare class ProjectService {
    private projectRepository;
    private topicsService;
    private linkService;
    constructor(projectRepository: Repository<Project>, topicsService: TopicsService, linkService: LinksService);
    create(createProjectInput: CreateProjectInput): Promise<Project>;
    parseTopic(project: Project): Promise<Project>;
    parseTopics(projects: Project[]): Promise<Project[]>;
    parseLink(project: Project): Promise<Project>;
    parseLinks(projects: Project[]): Promise<Project[]>;
    findAll(): Promise<Project[]>;
    findOne(id: number): Promise<Project>;
    findByLanguage(language: Language): Promise<Project[]>;
    update(updateProjectInput: UpdateProjectInput): Promise<UpdateProjectInput & Project>;
    remove(id: number): Promise<Project>;
}
