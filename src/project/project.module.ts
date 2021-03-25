import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectResolver } from './project.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { TopicsModule } from 'src/topics/topics.module';
import { LinksModule } from 'src/links/links.module';

@Module({
  imports: [TypeOrmModule.forFeature([Project]),TopicsModule,LinksModule],
  providers: [ProjectResolver, ProjectService],
})
export class ProjectModule {}
