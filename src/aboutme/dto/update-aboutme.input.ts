import { CreateAboutmeInput } from './create-aboutme.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Language } from '../../enums/Language';

@InputType()
export class UpdateAboutmeInput extends PartialType(CreateAboutmeInput) {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field(type => Language,{ nullable: true })
  language?: Language;
}
