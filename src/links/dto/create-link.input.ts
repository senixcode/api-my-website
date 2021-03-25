import { InputType, Int, Field } from '@nestjs/graphql';
@InputType()
export class CreateLinkInput {
  @Field()
  name: string;

  @Field()
  href: string;

  @Field({nullable:true})
  icon?: string;
}
