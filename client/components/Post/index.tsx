import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IconButton, Paper, Typography } from '@material-ui/core';
import {
    ModeCommentOutlined as CommentsIcon,
    RepeatOutlined as RepostIcon,
    BookmarkBorderOutlined as FavoriteIcon,
    ShareOutlined as ShareIcon,
} from '@material-ui/icons';

import styles from './Post.module.scss';
import { PostActions } from '../PostActions';

export const Post: React.FC = () => {
    return (
        <Paper elevation={0} className="p-20" classes={{ root: styles.paper }}>
            <Typography variant="h5" className={styles.title}>
                <Link href="/news/test">
                    <a>
                        В Новой Зеландии уволили официального городского волшебника, потому что его образ «устарел»
                    </a>
                </Link>
            </Typography>
            <Typography className="mt-15 mb-15">Он занимал должность 23 года, развлекая туристов и иностранные делегации.</Typography>
            <Image
                src="https://leonardo.osnova.io/e1c366db-bce9-554d-95bf-25eced86191c/-/preview/700/-/format/webp"
                height={500}
                width={600}
            />
            <PostActions />
        </Paper>
    );
};
