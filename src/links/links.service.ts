import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectID, Repository } from 'typeorm';
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

  UpdatePropertyHrefCategory(link: Link): Link {
    if (link.href && link.category) {
      link.hrefCategory = `${link.href} ${link.category}`;
    }
    return link;
  }

  ListUpdateObject(links: Array<Link>): Array<Link> {
    return links.map((link) => this.UpdatePropertyHrefCategory(link));
  }

  async findAll(): Promise<Link[]> {
    let links: Link[] = await this.LinkRepository.find();
    links = this.ListUpdateObject(links);
    return links;
  }

  async findOne(id: ObjectID | string): Promise<Link> {
    let link: Link = await this.LinkRepository.findOneOrFail(id);
    link = this.UpdatePropertyHrefCategory(link);
    return link;
  }
  async findOneByIds(ids: string[]): Promise<Link[]> {
    let links: Link[] = [];
    for (let id of ids) {
      let link: Link = await this.findOne(id);
      links.push(link);
    }
    return links;
  }
  // async parseLinks(ids: Array<number>): Promise<Link[]> {
  //   let Links: Link[] = [];
  //   for (const id of ids) {
  //     let Link: Link = await this.findOne(id);
  //     Links.push(Link);
  //   }
  //   return Links;
  // }

  async update(
    updateLinkInput: UpdateLinkInput,
  ): Promise<UpdateLinkInput & Link> {
    return await this.LinkRepository.save(updateLinkInput);
  }

  async remove(id: ObjectID): Promise<Link> {
    const Link = await this.findOne(id);
    await this.LinkRepository.delete(id);
    return Link;
  }
}
