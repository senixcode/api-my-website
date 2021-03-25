import { Language } from 'src/Language';
import { Repository } from 'typeorm';
import { CreateAboutmeInput } from './dto/create-aboutme.input';
import { UpdateAboutmeInput } from './dto/update-aboutme.input';
import { Aboutme } from './entities/aboutme.entity';
export declare class AboutmeService {
    private aboutmeRepository;
    constructor(aboutmeRepository: Repository<Aboutme>);
    create(createAboutmeInput: CreateAboutmeInput): Promise<Aboutme>;
    findAll(): Promise<Aboutme[]>;
    findOne(id: number): Promise<Aboutme>;
    findByLanguage(language: Language): Promise<Aboutme[]>;
    update(updateAboutmeInput: UpdateAboutmeInput): Promise<UpdateAboutmeInput & Aboutme>;
    remove(id: number): Promise<Aboutme>;
}
