import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project) private projectRepository: Repository<Project>,
  ) {}

  create(createProjectInput: CreateProjectInput): Promise<Project> {
    const newRecord = this.projectRepository.create(createProjectInput);
    return this.projectRepository.save(newRecord);
  }

  findAll(): Promise<Project[]> {
    return this.projectRepository.find();
  }

  findOne(id: number): Promise<Project> {
    return this.projectRepository.findOneOrFail(id);
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
