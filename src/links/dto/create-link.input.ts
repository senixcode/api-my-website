import { InputType, Int, Field } from '@nestjs/graphql';
import { CategoryLink } from '../../enums/CategoryLink';
@InputType()
export class CreateLinkInput {
  @Field()
  name: string;

  @Field()
  href: string;

  @Field({nullable:true})
  icon?: string;

  @Field(type => CategoryLink,{ nullable: true})
  category?: CategoryLink;
}
