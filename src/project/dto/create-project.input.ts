import { InputType, Field } from '@nestjs/graphql';
import { Link } from 'src/links/entities/link.entity';
import { Topic } from 'src/topics/entities/topic.entity';
import { Language } from '../../enums/Language';

@InputType()
export class CreateProjectInput {
  @Field()
  title: string;

  @Field()
  titleSeo: string;

  @Field()
  summary: string;

  @Field((type) => String)
  description?: string;

  @Field((type) => [String])
  topics: string[];

  @Field((type) => [String])
  links: string[];

  @Field((type) => Language)
  language: Language;
}
