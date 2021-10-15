import React, { useState } from 'react';
import { Input, Button } from '@material-ui/core';

import styles from './AddCommentForm.module.scss';

export const AddCommentForm = () => {
    const [clicked, setclicked] = useState(false);

    return (
        <div>
            <Input
                classes={{ root: styles.fieldRoot }}
                placeholder="Написать комментарий..."
                onFocus={() => setclicked(true)}
                minRows={clicked ? 5 : 1}
                fullWidth
                multiline
            />
            <Button style={{ height: 42 }} variant="contained" color="primary">
                Отправить
            </Button>
        </div>
    );
};
