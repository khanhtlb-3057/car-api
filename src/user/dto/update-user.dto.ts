import { IsBoolean, IsString } from "class-validator";

export class UpdateUserDto {
  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsBoolean()
  admin: boolean;
}
