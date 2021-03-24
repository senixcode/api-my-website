import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLinkInput } from './dto/create-link.input';
import { UpdateLinkInput } from './dto/update-link.input';
import { Link } from './entities/link.entity';

@Injectable()
export class LinksService {
 constructor(
    @InjectRepository(Link) private LinkRepository: Repository<Link>,
  ) {}
  create(createLinkInput: CreateLinkInput) {
    const newLink = this.LinkRepository.create(createLinkInput);
    return this.LinkRepository.save(newLink);
  }

  findAll(): Promise<Link[]> {
    return this.LinkRepository.find();
  }

  findOne(id: number): Promise<Link> {
    return this.LinkRepository.findOneOrFail(id);
  }

  async parseLinks(ids: Array<number>): Promise<Link[]> {
    let Links: Link[] = [];
    for (const id of ids) {
      let Link: Link = await this.findOne(id);
      Links.push(Link);
    }
    return Links;
  }

  async update(
    updateLinkInput: UpdateLinkInput,
  ): Promise<UpdateLinkInput & Link> {
    return await this.LinkRepository.save(updateLinkInput);
  }

  async remove(id: number): Promise<Link> {
    const Link = await this.findOne(id);
    await this.LinkRepository.delete(id);
    return Link;
  } 
}
