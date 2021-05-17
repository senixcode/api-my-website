import { ObjectType, Field, ID, InputType } from '@nestjs/graphql';
import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
@ObjectType()
@InputType('topic')
export class Topic {
  @ObjectIdColumn()
  @Field((type) => ID)
  _id: ObjectID;

  @Column()
  @Field()
  name: string;

  constructor(_id: ObjectID, name: string) {
    this._id = _id;
    this.name = name;
  }
}
