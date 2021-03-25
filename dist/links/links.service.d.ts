import { Repository } from 'typeorm';
import { CreateLinkInput } from './dto/create-link.input';
import { UpdateLinkInput } from './dto/update-link.input';
import { Link } from './entities/link.entity';
export declare class LinksService {
    private LinkRepository;
    constructor(LinkRepository: Repository<Link>);
    create(createLinkInput: CreateLinkInput): Promise<Link>;
    findAll(): Promise<Link[]>;
    findOne(id: number): Promise<Link>;
    parseLinks(ids: Array<number>): Promise<Link[]>;
    update(updateLinkInput: UpdateLinkInput): Promise<UpdateLinkInput & Link>;
    remove(id: number): Promise<Link>;
}
