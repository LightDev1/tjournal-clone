import React, { useState } from 'react';
import { Input, Button } from '@material-ui/core';

import styles from './AddCommentForm.module.scss';

export const AddCommentForm = () => {
    const [clicked, setClicked] = useState(false);
    const [text, setText] = useState('');

    const onAddComment = () => {
        setClicked(false);
        setText('');
    };

    return (
        <div className={styles.form}>
            <Input
                classes={{ root: styles.fieldRoot }}
                placeholder="Написать комментарий..."
                onFocus={() => setClicked(true)}
                onChange={(event) => setText(event.target.value)}
                value={text}
                minRows={clicked ? 5 : 1}
                fullWidth
                multiline
            />
            {clicked && (
                <Button
                    className={styles.addButton}
                    style={{ height: 42 }}
                    onClick={onAddComment}
                    variant="contained"
                    color="primary"
                >
                    Отправить
                </Button>)}
        </div>
    );
};
