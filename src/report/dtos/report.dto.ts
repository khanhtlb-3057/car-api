import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('reports')
export class reportDto {
  @Field()
  id: number;

  @Field()
  approved: boolean;

  @Field()
  price: number;

  @Field()
  make: string;
}
