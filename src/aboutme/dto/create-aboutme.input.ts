import { InputType, Field } from '@nestjs/graphql';
import { Language } from '../../enums/Language';

@InputType()
export class CreateAboutmeInput {
  @Field()
  name: string;

  @Field(type => Language)
  language: Language;
}
