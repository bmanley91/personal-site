import { NextPage } from 'next';
import SocialBar from '../components/social-bar';

const Home: NextPage = () => {
    return (
        <div id='app'>
            <h1>Hello from Brian!</h1>
            <SocialBar />
        </div>
    );
};

export default Home;