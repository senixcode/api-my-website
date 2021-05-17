import { ObjectType, Field, ID, InputType } from '@nestjs/graphql';
import { CategoryLink } from 'src/enums/CategoryLink';
import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
@ObjectType()
@InputType('link')
export class Link {
  @ObjectIdColumn()
  @Field((type) => ID)
  _id: ObjectID;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  href: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  icon?: string;

  @Column()
  @Field((type) => CategoryLink)
  category: CategoryLink;

  @Field()
  hrefCategory: string;

  constructor(
    _id: ObjectID,
    name: string,
    href: string,
    icon = '',
    category: CategoryLink,
  ) {
    this._id = _id;
    this.name = name;
    this.href = href;
    this.icon = icon;
    this.category = category;
  }
}
