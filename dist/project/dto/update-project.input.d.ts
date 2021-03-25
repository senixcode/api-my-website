import { CreateProjectInput } from './create-project.input';
import { Language } from 'src/Language';
declare const UpdateProjectInput_base: import("@nestjs/common").Type<Partial<CreateProjectInput>>;
export declare class UpdateProjectInput extends UpdateProjectInput_base {
    id: number;
    title?: string;
    titleSeo?: string;
    summary?: string;
    description?: string;
    topics?: string;
    links?: string;
    language?: Language;
}
export {};
