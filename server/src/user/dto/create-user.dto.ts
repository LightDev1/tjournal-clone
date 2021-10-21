import { IsEmail, Length } from 'class-validator';
import { UniqueOnDatabase } from 'src/auth/validations/UniqueValidation';
import { UserEntity } from '../entities/user.entity';

export class CreateUserDto {
    @Length(3)
    fullName: string;

    @IsEmail(undefined, { message: 'Неверная почта' })
    @UniqueOnDatabase(UserEntity, {
        message: "Этот адресс почты уже занят",
    })
    email: string;

    @Length(6, 25, { message: 'Пароль должен быть не менее 6 символов' })
    password?: string;
}
