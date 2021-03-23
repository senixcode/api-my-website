import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Language } from 'src/Language';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Aboutme {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field(type => Language)
  language: Language;
}
