import { InputType,  Field } from '@nestjs/graphql';

@InputType()
export class CreateAboutmeInput {
  @Field()
  name: string;

  @Field()
  language:string
}
