import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Language } from '../../enums/Language';
import { Link } from '../../links/entities/link.entity';
import { Topic } from '../../topics/entities/topic.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CategoryLink } from '../../enums/CategoryLink';

@Entity()
@ObjectType()
export class Project {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  titleSeo: string;

  @Column()
  @Field()
  summary: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  description?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  topics?: string;


  @Field(type => [String],{ nullable: "itemsAndList" })
   descriptionParse?: string[];

  @Field(type => [Topic],{ nullable: "itemsAndList" })
   topicsParse?: Topic[];

  @Field(type => [Link],{ nullable: "itemsAndList" })
   linksParse?: Link[];

  @Column({ nullable: true })
  @Field({ nullable: true })
  links?: string;

  @Column()
  @Field(type => Language)
  language: Language;
}
