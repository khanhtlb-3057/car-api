import { Field, InputType } from "@nestjs/graphql";
import { IsBoolean, IsEmail, IsNotEmpty, IsString } from "class-validator";

@InputType()
export class CreateUserDto {
  public static resource = 'users';

  @Field()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  password: string;

  @Field()
  @IsBoolean()
  admin: boolean;
}
