import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectModule } from './project/project.module';
import { TopicsModule } from './topics/topics.module';
import { LinksModule } from './links/links.module';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { config } from './config';
import { DatabaseConfig } from './database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env'],
      isGlobal: true,
      load: [config],
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      debug: true,
      playground: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseConfig,
    }),
    ProjectModule,
    TopicsModule,
    LinksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
