import { ObjectType, Field } from '@nestjs/graphql';
import { reportDto } from '../../report/dtos/report.dto';

@ObjectType('users')
export class userDto {
  @Field()
  id: number;

  @Field()
  email: string;

  @Field()
  admin: boolean;

  @Field(() => [reportDto])
  reports: [reportDto]
}
