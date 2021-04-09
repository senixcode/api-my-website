import { InputType, Field } from '@nestjs/graphql';
import { Language } from 'src/enums/Language';

@InputType()
export class CreateAboutmeInput {
  @Field()
  name: string;

  @Field(type => Language)
  language: Language;
}
