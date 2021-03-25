import { CreateLinkInput } from './create-link.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLinkInput extends PartialType(CreateLinkInput) {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  href?: string;

  @Field({ nullable: true })
  icon?: string;
}
