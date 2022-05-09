import React from 'react';
import { NextPage } from 'next';
import IntroSection from '../components/intro';
import Layout from '../components/layout';
import ContentList from '../components/content-list';
import { myStuff, coolStuff, learningStuff } from '../resources/content';
import { ThemeProvider } from '../components/theme-provider';
import ContentCarousel from '../components/content-carousel';
import { BrowserView, MobileView } from 'react-device-detect';

const Home: NextPage = () => {
    return (
        <ThemeProvider>
            <Layout title='Brian Manley - Home'>
                <IntroSection />
                <MobileView>
                    <ContentCarousel title="Stuff I've Worked On" contentCardPropArray={myStuff}/>
                    <ContentCarousel title="Stuff I've Learned From" contentCardPropArray={learningStuff}/>
                    <ContentCarousel title="Stuff That I Think is Cool " contentCardPropArray={coolStuff}/>
                </MobileView>
                <BrowserView>
                    <ContentList title="Stuff I've Worked On" contentCardPropArray={myStuff}/>
                    <ContentList title="Stuff I've Learned From" contentCardPropArray={learningStuff}/>
                    <ContentList title="Stuff That I Think is Cool " contentCardPropArray={coolStuff}/>
                </BrowserView>
            </Layout>
        </ThemeProvider>
    );
};

export default Home;
