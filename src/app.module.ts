import { Module } from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouteModule } from './route/route.module';
import { AboutmeModule } from './aboutme/aboutme.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
       autoSchemaFile: true,
    }),
    TypeOrmModule.forRoot({
      type:'sqlite',
      database:'db.sqlite3',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize:true,
    }),
    RouteModule,
    AboutmeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
