import { Module } from '@nestjs/common';
import { AboutmeService } from './aboutme.service';
import { AboutmeResolver } from './aboutme.resolver';
import { Aboutme } from './entities/aboutme.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Aboutme])],
  providers: [AboutmeResolver, AboutmeService],
})
export class AboutmeModule {}
