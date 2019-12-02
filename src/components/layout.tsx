import Head from 'next/head';
import { Global } from '@emotion/core';
import SocialBar from './social-bar';
import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { ThemeProvider, useTheme } from './theme-provider';


export interface LayoutProps {
    title: string;
    children?: ReactNode;
}

const AppDiv = styled('div')`
    position: relative;
    min-height: 100vh;
    background: ${(props: any) => props.theme.background};
`

const ContentWrapper = styled('div')`
    margin-right: 5%;
    margin-left: 5%;
    color: ${(props: any) => props.theme.body};
    a:link, a:visited {
        color: ${(props: any) => props.theme.body};
    }
`

const Header = styled('div')`
    height: 5px;
    background-color: black;
`

const Layout: React.FunctionComponent<LayoutProps> = (props: LayoutProps) => {
    const themeState = useTheme();
    
    return (
        <div id='app'>
            <Head>
                <title>{props.title}</title>
            </Head>
            <Global styles={{
                body: {
                    margin: 0,
                    fontFamily: "'Poppins', sans-serif"
                }
            }}/>
            <AppDiv>
                <Header className='page-header' />
                <button onClick={() => themeState.toggle()}>
                    { themeState.dark ? 'Switch to Light Mode' : 'Switch to Dark Mode' }
                </button>
                <ContentWrapper id='wrapper'>
                    {props.children}
                </ContentWrapper>
                <SocialBar />
            </AppDiv>
        </div>
    );
};

export default Layout;
