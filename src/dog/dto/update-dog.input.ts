import { CreateDogInput } from './create-dog.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDogInput extends PartialType(CreateDogInput) {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  age: number;

  @Field()
  breed: string;
}
