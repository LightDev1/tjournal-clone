import { Button, Divider, Paper, TextField, Typography } from '@material-ui/core';
import type { NextPage } from 'next';

import { MainLayout } from '../../layouts/MainLayout';

const Settings: NextPage = () => {
    return (
        <MainLayout hideComments>
            <Paper className="p-20" elevation={0}>
                <Typography variant="h6">
                    Основные настройки
                </Typography>
                <Divider className="mt-20 mb-30" />
                <form >
                    <TextField
                        className="mb-20"
                        size="small"
                        required
                        label="Никнейм"
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        size="small"
                        required
                        label="Эл. почта"
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        className="mb-20"
                        size="small"
                        required
                        label="Пароль"
                        variant="outlined"
                        fullWidth
                    />
                    <Divider className="mt-30 mb-20" />
                    <Button color="primary" variant="contained">Сохранить изменения</Button>
                </form>
            </Paper>
        </MainLayout>
    );
}

export default Settings;