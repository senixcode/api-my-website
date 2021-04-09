import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Language } from 'src/enums/Language';
import { Equal, Repository } from 'typeorm';
import { CreateAboutmeInput } from './dto/create-aboutme.input';
import { UpdateAboutmeInput } from './dto/update-aboutme.input';
import { Aboutme } from './entities/aboutme.entity';

@Injectable()
export class AboutmeService {
  constructor(
    @InjectRepository(Aboutme) private aboutmeRepository: Repository<Aboutme>,
  ) {}

  create(createAboutmeInput: CreateAboutmeInput): Promise<Aboutme> {
    const newRecord = this.aboutmeRepository.create(createAboutmeInput);
    return this.aboutmeRepository.save(newRecord);
  }

  findAll(): Promise<Aboutme[]> {
    return this.aboutmeRepository.find();
  }
  findOne(id: number): Promise<Aboutme> {
    return this.aboutmeRepository.findOneOrFail(id);
  }

  findByLanguage(language?: Language, all: boolean = false): Promise<Aboutme[]> {
    if(language){
      return this.aboutmeRepository.find({
        language: Equal(language)
      });
    }
    if(all) return this.findAll()
  }

  async update(updateAboutmeInput: UpdateAboutmeInput) {
    return await this.aboutmeRepository.save(updateAboutmeInput);
  }

  async remove(id: number): Promise<Aboutme> {
    const aboutme = await this.aboutmeRepository.findOneOrFail(id);
    await this.aboutmeRepository.delete(id);
    return aboutme;
  }
}
