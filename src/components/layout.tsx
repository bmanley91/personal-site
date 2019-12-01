import Head from 'next/head';
import { Global } from '@emotion/core';
import SocialBar from './social-bar';
import { ReactNode } from 'react';
import styled from '@emotion/styled';

export interface LayoutProps {
    title: string;
    children?: ReactNode;
}

const AppDiv = styled('div')`
    position: relative;
    min-height: 100vh;
`

const ContentWrapper = styled('div')`
    margin-right: 5%;
    margin-left: 5%;
`

const Header = styled('div')`
    height: 5px;
    background-color: black;
`

const Layout: React.FunctionComponent<LayoutProps> = (props: LayoutProps) => {
    return (
        <div id='app'>
            <Head>
                <title>{props.title}</title>
            </Head>
            <Global styles={{
                body: {
                    margin: 0
                }
            }}/>
            <AppDiv>
                <Header className='page-header' />
                <ContentWrapper>
                    {props.children}
                </ContentWrapper>
                <SocialBar />
            </AppDiv>
        </div>
    );
};

export default Layout;
