import { CreateLinkInput } from './create-link.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';
import { CategoryLink } from 'src/enums/CategoryLink';
import { ObjectID } from 'typeorm';

@InputType()
export class UpdateLinkInput extends PartialType(CreateLinkInput) {
  @Field(() => ID)
  id: ObjectID;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  href?: string;

  @Field({ nullable: true })
  icon?: string;

  @Field((type) => CategoryLink, { nullable: true })
  category?: CategoryLink;
}
