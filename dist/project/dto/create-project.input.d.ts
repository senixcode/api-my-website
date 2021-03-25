import { Language } from 'src/Language';
export declare class CreateProjectInput {
    title: string;
    titleSeo: string;
    summary: string;
    description?: string;
    topics?: string;
    links?: string;
    language: Language;
}
