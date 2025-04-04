import { IsInt, IsNotEmpty, IsEnum, IsString, MaxLength, Min } from 'class-validator';

export class CreateUserDto {
  @IsInt()
  @Min(1)
  id: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @IsInt()
  @Min(0)
  age: number;

  @IsEnum(["INTERN", "ADMIN", "USER"],{
    message: "Invalid role"
  })
  role: 'INTERN' | 'ADMIN' | 'USER';
}
