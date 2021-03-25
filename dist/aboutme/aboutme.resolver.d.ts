import { AboutmeService } from './aboutme.service';
import { Aboutme } from './entities/aboutme.entity';
import { CreateAboutmeInput } from './dto/create-aboutme.input';
import { UpdateAboutmeInput } from './dto/update-aboutme.input';
import { Language } from 'src/Language';
export declare class AboutmeResolver {
    private readonly aboutmeService;
    constructor(aboutmeService: AboutmeService);
    createAboutme(createAboutmeInput: CreateAboutmeInput): Promise<Aboutme>;
    findAll(): Promise<Aboutme[]>;
    findOne(id: number): Promise<Aboutme>;
    findByLanguage(language: Language): Promise<Aboutme[]>;
    updateAboutme(updateAboutmeInput: UpdateAboutmeInput): Promise<UpdateAboutmeInput & Aboutme>;
    removeAboutme(id: number): Promise<Aboutme>;
}
