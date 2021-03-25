import { LinksService } from './links.service';
import { Link } from './entities/link.entity';
import { CreateLinkInput } from './dto/create-link.input';
import { UpdateLinkInput } from './dto/update-link.input';
export declare class LinksResolver {
    private readonly linksService;
    constructor(linksService: LinksService);
    createLink(createLinkInput: CreateLinkInput): Promise<Link>;
    findAll(): Promise<Link[]>;
    findOne(id: number): Promise<Link>;
    updateLink(updateLinkInput: UpdateLinkInput): Promise<UpdateLinkInput & Link>;
    removeLink(id: number): Promise<Link>;
}
