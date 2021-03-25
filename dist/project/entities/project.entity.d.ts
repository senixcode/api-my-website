import { Language } from 'src/Language';
import { Link } from 'src/links/entities/link.entity';
import { Topic } from 'src/topics/entities/topic.entity';
export declare class Project {
    id: number;
    title: string;
    titleSeo: string;
    summary: string;
    description?: string;
    topics?: string;
    topicsParse?: Topic[];
    linksParse?: Link[];
    links?: string;
    language: Language;
}
