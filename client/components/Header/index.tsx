import React from 'react';
import Link from 'next/link';
import { Avatar, Button, IconButton, Paper } from '@material-ui/core';
import {
    SearchOutlined as SearchIcon,
    CreateOutlined as PenIcon,
    SmsOutlined as MessageIcon,
    NotificationsNoneOutlined as NotificationIcon,
    Menu as MenuIcon,
    ExpandMoreOutlined as ArrowBottom
} from '@material-ui/icons';

import styles from './Header.module.scss';

export const Header: React.FC = () => {
    return (
        <Paper classes={{ root: styles.root }} elevation={0}>
            <div className="d-flex align-center">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <Link href="/">
                    <a>
                        <img height={35} className="mr-20" src="/static/img/logo.svg" alt="Logo" />
                    </a>
                </Link>
                <div className={styles.searchBox}>
                    <SearchIcon />
                    <input placeholder="Поиск" />
                </div>

                <Link href="/write">
                    <a>
                        <Button variant="contained" className={styles.penButton}>
                            Новая запись
                        </Button>
                    </a>
                </Link>
            </div>
            <div className="d-flex align-center">
                <IconButton>
                    <MessageIcon />
                </IconButton>
                <IconButton>
                    <NotificationIcon />
                </IconButton>
                <Link href="/profile/1">
                    <a className="d-flex align-center">
                        <Avatar
                            className={styles.avatar}
                            alt="avatar"
                            src="https://leonardo.osnova.io/5ffeac9a-a0e5-5be6-98af-659bfaabd2a6/-/scale_crop/108x108/-/format/webp/"
                        />
                        <ArrowBottom />
                    </a>
                </Link>
            </div>
        </Paper>
    );
};
