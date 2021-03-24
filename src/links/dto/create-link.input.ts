import { InputType, Int, Field } from '@nestjs/graphql';
import { truncateSync } from 'node:fs';

@InputType()
export class CreateLinkInput {
  @Field()
  name: string;

  @Field()
  href: string;

  @Field({nullable:true})
  icon?: string;
}
