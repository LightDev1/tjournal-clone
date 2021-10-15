import { NextPage } from 'next';

import { FullPost } from '../../components/FullPost';
import { PostComments } from '../../components/PostComments';
import { comments } from '../../components/SideComments';
import { MainLayout } from '../../layouts/MainLayout';

const Post: NextPage = () => {
    return (
        <MainLayout className="mb-50" contentFullWidth>
            <FullPost />
            <PostComments items={comments} />
        </MainLayout>
    );
}

export default Post;