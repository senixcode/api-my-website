import { CreateProjectInput } from './create-project.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProjectInput extends PartialType(CreateProjectInput) {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  titleSeo?: string;

  @Field({ nullable: true })
  summary?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  topics?: string;

  @Field({ nullable: true })
  links?: string;

  @Field({ nullable: true })
  language?: string;
}
