import { CreateAboutmeInput } from './create-aboutme.input';
import { Language } from 'src/Language';
declare const UpdateAboutmeInput_base: import("@nestjs/common").Type<Partial<CreateAboutmeInput>>;
export declare class UpdateAboutmeInput extends UpdateAboutmeInput_base {
    id: number;
    name?: string;
    language?: Language;
}
export {};
