import { NextPage } from 'next';
import IntroSection from '../components/intro';
import Layout from '../components/layout';
import ContentList from '../components/content-list';
import { stuffIWorkedOn } from '../resources/content/my-stuff';

const Home: NextPage = () => {
    return (
        <Layout title='Brian Manley - Home'>
            <IntroSection />
            <ContentList title='Stuff I Worked On' contentCardPropArray={stuffIWorkedOn}/>
        </Layout>
    );
};

export default Home;