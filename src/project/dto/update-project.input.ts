import { CreateProjectInput } from './create-project.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';
import { Language } from '../../enums/Language';
import { Topic } from 'src/topics/entities/topic.entity';
import { Link } from 'src/links/entities/link.entity';
import { ObjectID } from 'typeorm';

@InputType()
export class UpdateProjectInput extends PartialType(CreateProjectInput) {
  @Field((type) => ID)
  id: ObjectID;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  titleSeo?: string;

  @Field({ nullable: true })
  summary?: string;

  @Field((type) => String, { nullable: null })
  description?: string;

  @Field((type) => [String], { nullable: 'itemsAndList' })
  topics?: string[];

  @Field((type) => [String], { nullable: 'itemsAndList' })
  links?: string[];

  @Field((type) => Language, { nullable: true })
  language?: Language;
}
