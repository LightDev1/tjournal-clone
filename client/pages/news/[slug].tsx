import { NextPage } from 'next';
import { Divider, Paper, Typography, Tabs, Tab } from '@material-ui/core';

import { FullPost } from '../../components/FullPost';
import { MainLayout } from '../../layouts/MainLayout';
import { Comment } from '../../components/Comment';

const Home: NextPage = () => {
    return (
        <MainLayout className="mb-50" contentFullWidth>
            <FullPost />
            <Paper elevation={0} className="mt-40 p-30">
                <Typography variant="h6" className="mb-20">71 комментарий</Typography>
                <Tabs className="mt-20" value={0} indicatorColor="primary" textColor="primary">
                    <Tab label="Популярные" />
                    <Tab label="По порядку" />
                </Tabs>
                <Divider />
                <div className="mb-20" />
                <Comment />
                <Comment />
                <Comment />
            </Paper>
        </MainLayout>
    );
}

export default Home;