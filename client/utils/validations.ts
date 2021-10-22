import * as yup from "yup";

export const LoginFormSchema = yup.object({
    email: yup.string().email('Невалидный email').required('Требуется email'),
    password: yup.string().required('Требуется пароль'),
}).required();

export const RegisterFormSchema = yup.object({
    fullName: yup.string().required('Требуется имя и фамилие'),
    email: yup.string().email('Невалидный email').required('Требуется email'),
    password: yup.string().min(6, 'Пароль должен быть не менее 6 символов').required('Требуется пароль'),
}).required();