import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateDogInput {
  @Field()
  name: string;

  @Field()
  age: number;

  @Field()
  breed: string;
}
