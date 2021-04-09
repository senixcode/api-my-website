import { ObjectType, Field, Int } from '@nestjs/graphql';
import { CategoryLink } from 'src/enums/CategoryLink';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Link {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

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
  @Field(type => CategoryLink)
  category: CategoryLink;

  @Field()
  hrefCategory:string;
}
