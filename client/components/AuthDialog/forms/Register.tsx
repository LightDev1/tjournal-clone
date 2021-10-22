import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { setCookie } from 'nookies';
import { Alert } from '@material-ui/lab';
import { RegisterFormSchema } from '../../../utils/validations';
import { FormField } from '../../FormField';
import { UserApi } from '../../../utils/api';
import { CreateUserDto } from '../../../utils/api/types';
import { useAppDispatch } from '../../../redux/hooks';
import { setUserData } from '../../../redux/slices/user';


interface LoginFormProps {
    onOpenRegister: () => void;
    onOpenLogin: () => void;
}

export const RegisterForm: React.FC<LoginFormProps> = ({ onOpenRegister, onOpenLogin }) => {
    const dispatch = useAppDispatch();
    const [errorMessage, setErrorMessage] = useState('');

    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(RegisterFormSchema),
    });

    const onSubmit = async (dto: CreateUserDto) => {
        try {
            const data = await UserApi.register(dto);
            setCookie(null, 'authToken', data.token, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/'
            });
            dispatch(setUserData(data));
            setErrorMessage('');
        } catch (err) {
            console.warn('Ошибка при регистрации', err);
            // @ts-ignore
            setErrorMessage(err.response.data.message);
        }
    };

    return (
        <div>
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField name="fullName" label="Имя и фамилие" />
                    <FormField name="email" label="Почта" />
                    <FormField name="password" label="Пароль" />
                    {errorMessage && <Alert severity="error" className="mb-20">{errorMessage}</Alert>}
                    <div className="d-flex align-center justify-between">
                        <Button
                            disabled={!form.formState.isValid || form.formState.isSubmitting}
                            onClick={onOpenRegister}
                            type="submit"
                            color="primary"
                            variant="contained"
                        >
                            Зарегистрироваться
                        </Button>
                        <Button
                            onClick={onOpenLogin}
                            color="primary"
                            variant="text"
                        >
                            Войти
                        </Button>
                    </div>
                </form>
            </FormProvider>
        </div>
    );
};