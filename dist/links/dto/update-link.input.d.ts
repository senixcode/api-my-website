import { CreateLinkInput } from './create-link.input';
declare const UpdateLinkInput_base: import("@nestjs/common").Type<Partial<CreateLinkInput>>;
export declare class UpdateLinkInput extends UpdateLinkInput_base {
    id: number;
    name?: string;
    href?: string;
    icon?: string;
}
export {};
