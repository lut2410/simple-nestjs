import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Dog {
  @Field(() => Int, { description: 'Id ne', nullable: true })
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ nullable: true })
  @Column({ length: 50 })
  name: string;

  @Field({ nullable: true })
  @Column()
  age: number;

  @Field({ nullable: true })
  @Column({ length: 100 })
  breed: string;

  @Field({ nullable: true })
  @Column({ length: 100 })
  breed2: string;
}
