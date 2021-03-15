import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateProjectInput {
  @Field()
  title: string;

  @Field()
  titleSeo: string;

  @Field()
  summary: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  topics?: string;

  @Field({ nullable: true })
  links?: string;

  @Field()
  language: string;
}
