import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { AddOutlined as AddIcon, CheckOutlined as CheckIcon } from '@material-ui/icons';

import styles from './FollowButton.module.scss';


export const FollowButton: React.FC = () => {
    const [followed, setfollowed] = useState(false)
    return (
        <Button onClick={() => setfollowed(!followed)} variant="contained" style={{ minWidth: 30, width: 40, height: 30 }}>
            {followed ? <AddIcon /> : <CheckIcon style={{ fontSize: 20, color: '#2ea83a' }} />}
        </Button>
    );
};
