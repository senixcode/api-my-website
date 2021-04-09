import { Field, InputType } from '@nestjs/graphql';
import { Language } from '../../enums/Language';

@InputType()
export class CreateRouteInput {
  @Field()
  path: string;

  // @IsAlpha()
  @Field()
  title: string;

  // @IsAlpha()
  @Field({ nullable: true })
  description?: string;

  // @IsAlpha()
  @Field(type => Language)
  language: Language;
}
