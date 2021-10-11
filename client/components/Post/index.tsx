import React from 'react';
import Image from 'next/image';
import { Paper, Typography } from '@material-ui/core';

import styles from './Post.module.scss';

export const Post: React.FC = () => {
    return (
        <Paper elevation={0} className="p-20" classes={{ root: styles.paper }}>
            <Typography variant="h5" className={styles.title}>В Новой Зеландии уволили официального городского волшебника, потому что его образ «устарел»</Typography>
            <Typography className="mt-15 mb-15">Он занимал должность 23 года, развлекая туристов и иностранные делегации.</Typography>
            <Image
                src="https://leonardo.osnova.io/e1c366db-bce9-554d-95bf-25eced86191c/-/preview/700/-/format/webp"
                height={500}
                width={600}
            />
        </Paper>
    );
};
