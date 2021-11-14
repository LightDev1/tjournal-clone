import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { Post } from '../components/Post';
import { MainLayout } from '../layouts/MainLayout';
import { setUserData } from '../redux/slices/user';
import { wrapper } from '../redux/store';
import { UserApi } from '../utils/api';

export default function Home() {
  return (
    <MainLayout>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async ctx => {
  try {
    const { authToken } = parseCookies(ctx);

    const userData = await UserApi.getMe(authToken);
    store.dispatch(setUserData(userData));

    return { props: {} };
  } catch (error) {
    return { props: {} };
  }
});