import { CreateTopicInput } from './create-topic.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';
import { ObjectID } from 'typeorm';

@InputType()
export class UpdateTopicInput extends PartialType(CreateTopicInput) {
  @Field((type) => ID)
  id: ObjectID;

  @Field()
  name: string;
}
