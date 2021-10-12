import React from 'react';
import Link from 'next/link';
import { Button } from '@material-ui/core';
import {
    WhatshotOutlined as FireIcon,
    SmsOutlined as MessageIcon,
    TrendingUp as TrendingIcon,
    FormatLineSpacingOutlined as ListIcon,
} from '@material-ui/icons';

import styles from './LeftMenu.module.scss';

const menu = [
    { text: 'Лента', icon: <FireIcon />, path: '/' },
    { text: 'Сообщения', icon: <MessageIcon />, path: '/messages' },
    { text: 'Рейтинг TJ', icon: <TrendingIcon />, path: '/rating' },
    { text: 'Подписки', icon: <ListIcon />, path: '/follows' },
];

export const LeftMenu: React.FC = () => {
    return (
        <div className={styles.menu}>
            <ul>
                {menu.map(item => (
                    <li key={item.path}>
                        <Link href={item.path}>
                            <Button>
                                {item.icon}
                                {item.text}
                            </Button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
