import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateTopicInput {
  @Field()
  name: string;
}
