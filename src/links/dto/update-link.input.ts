import { CreateLinkInput } from './create-link.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CategoryLink } from 'src/enums/CategoryLink';

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

   @Field(type => CategoryLink,{ nullable: true})
  category?: CategoryLink;
}
