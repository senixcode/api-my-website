import { Field, InputType, Int } from '@nestjs/graphql';
import { Language } from 'src/enums/Language';

@InputType()
export class UpdateRouteInput {
  @Field((type) => Int)
  id?: number;

  @Field({ nullable: true })
  path?: string;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  description?: string;

  @Field(type => Language,{ nullable: true })
  language?: Language;
}
