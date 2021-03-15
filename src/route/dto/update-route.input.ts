import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateRouteInput {
  @Field((type) => Int)
  id?: number;

  @Field({ nullable: true })
  path?: string;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  language?: string;
}
