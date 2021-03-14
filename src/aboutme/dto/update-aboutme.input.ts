import { CreateAboutmeInput } from './create-aboutme.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAboutmeInput extends PartialType(CreateAboutmeInput) {
  @Field(type => Int)
  id:number;

  @Field({ nullable: true })
  name?: string;

  @Field({nullable:true})
  language?:string
}
