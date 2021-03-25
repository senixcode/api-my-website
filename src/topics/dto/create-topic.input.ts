import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTopicInput {
 @Field()
 name:string
}
