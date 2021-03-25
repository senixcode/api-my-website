import { ProjectService } from './project.service';
import { Project } from './entities/project.entity';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { Language } from 'src/Language';
export declare class ProjectResolver {
    private readonly projectService;
    constructor(projectService: ProjectService);
    createProject(createProjectInput: CreateProjectInput): Promise<Project>;
    findAll(): Promise<Project[]>;
    findOne(id: number): Promise<Project>;
    findByLanguage(language: Language): Promise<Project[]>;
    updateProject(updateProjectInput: UpdateProjectInput): Promise<UpdateProjectInput & Project>;
    removeProject(id: number): Promise<Project>;
}
