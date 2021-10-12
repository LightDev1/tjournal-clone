import React from 'react';
import Image from 'next/image';
import { IconButton, Paper, Typography } from '@material-ui/core';
import {
    ModeCommentOutlined as CommentsIcon,
    RepeatOutlined as RepostIcon,
    BookmarkBorderOutlined as FavoriteIcon,
    ShareOutlined as ShareIcon,
} from '@material-ui/icons';

import styles from './Post.module.scss';

export const Post: React.FC = () => {
    return (
        <Paper elevation={0} className="p-20" classes={{ root: styles.paper }}>
            <Typography variant="h5" className={styles.title}>
                <a href="#">
                    В Новой Зеландии уволили официального городского волшебника, потому что его образ «устарел»
                </a>
            </Typography>
            <Typography className="mt-15 mb-15">Он занимал должность 23 года, развлекая туристов и иностранные делегации.</Typography>
            <Image
                src="https://leonardo.osnova.io/e1c366db-bce9-554d-95bf-25eced86191c/-/preview/700/-/format/webp"
                height={500}
                width={600}
            />

            <ul className={styles.actions}>
                <li>
                    <IconButton>
                        <CommentsIcon />
                    </IconButton>
                </li>
                <li>
                    <IconButton>
                        <RepostIcon />
                    </IconButton>
                </li>
                <li>
                    <IconButton>
                        <FavoriteIcon />
                    </IconButton>
                </li>
                <li>
                    <IconButton>
                        <ShareIcon />
                    </IconButton>
                </li>
            </ul>
        </Paper>
    );
};
