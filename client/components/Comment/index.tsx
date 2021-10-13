import React from 'react';
import { IconButton, Menu, MenuItem, Typography } from '@material-ui/core';
import { MoreHorizOutlined as MoreIcon } from '@material-ui/icons';

import styles from './Comment.module.scss';

interface CommentProps {
    user?: {
        fullname: string;
    };
    text?: string;
}

export const Comment: React.FC<CommentProps> = ({ user, text }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={styles.comment}>
            <div className={styles.userInfo}>
                <img
                    src="https://gif.cmtt.space/3/user-userpic/81/61/b3/78bce0aa65fd31.jpg"
                    alt="Avatar"
                />
                <b>Petr</b>
                <span>5 часов</span>
            </div>
            <Typography className={styles.text}>Его образ ещё не устарел. Терешкова подтвердит. Ей из дальнего космоса виднее 🪐</Typography>
            <span className={styles.replyBtn}>Ответить</span>
            <IconButton onClick={handleClick}>
                <MoreIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                elevation={2}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <MenuItem onClick={handleClose}>Удалить</MenuItem>
                <MenuItem onClick={handleClose}>Редактировать</MenuItem>
            </Menu>
        </div>
    );
};
