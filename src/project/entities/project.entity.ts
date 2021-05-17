import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Language } from '../../enums/Language';
import { Link } from '../../links/entities/link.entity';
import { Topic } from '../../topics/entities/topic.entity';
import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Project {
  @ObjectIdColumn()
  @Field((type) => ID)
  _id: ObjectID;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  titleSeo: string;

  @Column()
  @Field()
  summary: string;

  @Column()
  @Field((type) => String)
  description: string;

  @Column(type => Topic)
  @Field((type) => [Topic])
  topics?: Topic[];

  @Column(type => Link)
  @Field((type) => [Link], { nullable: 'itemsAndList' })
  links?: Link[];

  @Column()
  @Field((type) => Language)
  language: Language;
}
