import { NextPage } from 'next';
import MainBody from '../components/main-body';
import Layout from '../components/layout';

const Home: NextPage = () => {
    return (
        <div id='app'>
            <Layout title='Brian Manley - Home'>
                <MainBody />
            </Layout>
        </div>
    );
};

export default Home;