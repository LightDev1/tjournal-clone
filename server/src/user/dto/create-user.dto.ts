import { IsEmail, Length } from 'class-validator';

export class CreateUserDto {
    @Length(3)
    fullName: string;

    @IsEmail(undefined, { message: 'Неверная почта' })
    email: string;

    @Length(6, 25, { message: 'Пароль должен быть не менее 6 символов' })
    password?: string;
}
