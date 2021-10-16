import { NextPage } from 'next';

import { FullPost } from '../../components/FullPost';
import { PostComments } from '../../components/PostComments';
import { MainLayout } from '../../layouts/MainLayout';

const Post: NextPage = () => {
    return (
        <MainLayout className="mb-50" contentFullWidth>
            <FullPost />
            <PostComments />
        </MainLayout>
    );
}

export default Post;