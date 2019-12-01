import { NextPage } from 'next';
import IntroSection from '../components/intro';
import Layout from '../components/layout';
import ContentList from '../components/content-list';
import { myStuff, coolStuff, learningStuff } from '../resources/content';

const Home: NextPage = () => {
    return (
        <Layout title='Brian Manley - Home'>
            <IntroSection />
            <ContentList title="Stuff I've Worked On" contentCardPropArray={myStuff}/>
            <ContentList title="Stuff I've Learned From" contentCardPropArray={coolStuff}/>
            <ContentList title="Stuff That I Think is Cool " contentCardPropArray={learningStuff}/>
        </Layout>
    );
};

export default Home;