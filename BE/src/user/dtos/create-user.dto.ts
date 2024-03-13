import { IsString, MinLength, MaxLength, Matches } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(1)
  @MaxLength(32)
  username: string;

  @IsString()
  @MinLength(1)
  @MaxLength(10)
  phoneNumber: string;

  @IsString()
  @MinLength(6)
  @MaxLength(12)
  @Matches(
    /(?=.*[A-Z])(?=.*?[()#^*!&$@%_\-+=\\[\]{};':"|,.<>/?])[A-Za-z\d@$!%*#?&]/,
    {
      message:
        'Password must include at least one uppercase letter and one special character!',
    },
  )
  password: string;
}
