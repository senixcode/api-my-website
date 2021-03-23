import { InputType, Field } from '@nestjs/graphql';
import { Language } from 'src/Language';

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

  @Field(type => Language)
  language: Language;
}
