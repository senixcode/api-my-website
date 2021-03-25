import { CreateTopicInput } from './create-topic.input';
declare const UpdateTopicInput_base: import("@nestjs/common").Type<Partial<CreateTopicInput>>;
export declare class UpdateTopicInput extends UpdateTopicInput_base {
    id: number;
    name: string;
}
export {};
