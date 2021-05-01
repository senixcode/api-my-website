import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouteModule } from './route/route.module';
import { AboutmeModule } from './aboutme/aboutme.module';
import { ProjectModule } from './project/project.module';
import { TopicsModule } from './topics/topics.module';
import { LinksModule } from './links/links.module';
import { join } from 'path';
@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      debug: true,
      playground: true,
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite3',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    RouteModule,
    AboutmeModule,
    ProjectModule,
    TopicsModule,
    LinksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
