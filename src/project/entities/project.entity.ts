import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Language } from 'src/Language';
import { Topic } from 'src/topics/entities/topic.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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


  @Field(type => [Topic],{ nullable: "itemsAndList" })
   topicsParse?: Topic[];

  @Column({ nullable: true })
  @Field({ nullable: true })
  links?: string;

  @Column()
  @Field(type => Language)
  language: Language;
}
