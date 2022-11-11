import { Exclude } from "class-transformer";
import { IsBoolean, IsEmail, IsNumber, IsString } from "class-validator";

export class UserDto {
  @IsNumber()
  id: number;

  @IsEmail()
  email: string;

  @IsString()
  @Exclude()
  password: string;

  @IsBoolean()
  admin: boolean;
}
