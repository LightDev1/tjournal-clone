import React from 'react';
import dynamic from 'next/dynamic';
import { Button, Input } from '@material-ui/core';
import { TextsmsOutlined as MessageIcon } from '@material-ui/icons';

const Editor = dynamic(() => import('../Editor'), { ssr: false });

import styles from './WriteForm.module.scss';

interface WriteFormProps {
    title?: string;
}

export const WriteForm: React.FC<WriteFormProps> = ({ title }) => {


    return (
        <div>
            <Input classes={{ root: styles.titleField }} placeholder="Заголовок" defaultValue={title} />
            <div className={styles.editor}>
                <Editor />
            </div>
            <Button style={{ height: 42 }} variant="contained" color="primary">
                <MessageIcon className="mr-10" />
                Опубликовать
            </Button>
        </div>
    );
};
