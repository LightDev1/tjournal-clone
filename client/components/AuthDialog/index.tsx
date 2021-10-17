import React, { useState } from 'react';
import { Dialog, DialogContent, Typography, DialogContentText } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';

import styles from './AuthDialog.module.scss';
import { MainForm } from './forms/Main';
import { LoginForm } from './forms/Login';
import { RegisterForm } from './forms/Register';

interface AuthDialogProps {
    onClose: () => void;
    visible: boolean;
}

export const AuthDialog: React.FC<AuthDialogProps> = ({ onClose, visible }) => {
    const [formType, setFormType] = useState<'main' | 'login' | 'register'>('main');

    return (
        <Dialog
            open={visible}
            onClose={onClose}
            maxWidth="xs"
            fullWidth
        >
            <DialogContent>
                <DialogContentText>
                    <div className={styles.content}>
                        <Typography className={styles.title}>
                            {formType === 'main' ? 'Вход в TJ' : (
                                <p
                                    className={styles.backTitle}
                                    onClick={() => setFormType('main')}
                                >
                                    <ArrowBack />
                                    К авторизации
                                </p>)}
                        </Typography>
                        {
                            formType === 'main' && (
                                <MainForm onOpenLogin={() => setFormType('login')} />
                            )
                        }
                        {
                            formType === 'login' && (
                                <LoginForm onOpenRegister={() => setFormType('register')} />
                            )
                        }
                        {
                            formType === 'register' && (
                                <RegisterForm
                                    onOpenRegister={() => setFormType('register')}
                                    onOpenLogin={() => setFormType('login')}
                                />
                            )
                        }
                    </div>
                </DialogContentText>
            </DialogContent>
        </Dialog>
    );
};
