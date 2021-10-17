import React from 'react';
import { Button } from '@material-ui/core';
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterFormSchema } from '../../../utils/validations';
import { FormField } from '../../FormField';

interface LoginFormProps {
    onOpenRegister: () => void;
    onOpenLogin: () => void;
}

export const RegisterForm: React.FC<LoginFormProps> = ({ onOpenRegister, onOpenLogin }) => {
    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(RegisterFormSchema),
    });

    const onSubmit = (data: any) => console.log(data);

    console.log(form.formState.errors);

    return (
        <div>
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField name="fullname" label="Имя и фамилие" />
                    <FormField name="email" label="Почта" />
                    <FormField name="password" label="Пароль" />
                    <div className="d-flex align-center justify-between">
                        <Button disabled={!form.formState.isValid} onClick={onOpenRegister} type="submit" color="primary" variant="contained">
                            Зарегистрироваться
                        </Button>
                        <Button onClick={onOpenLogin} color="primary" variant="text">
                            Войти
                        </Button>
                    </div>
                </form>
            </FormProvider>
        </div>
    );
};