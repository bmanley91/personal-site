import Head from 'next/head';
import { Global } from '@emotion/core';
import SocialBar from './social-bar';
import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { useTheme } from './theme-provider';
import ContentWrapper from './content-wrapper';
import SiteWrapper from './site-wrapper';


export interface LayoutProps {
    title: string;
    children?: ReactNode;
}

const Header = styled('div')`
    background-color: black;
    overflow: auto;
`;

const ToggleButton = styled('button')`
    float: right;
    padding: 5px;
    background-color: black;
    border: none;
`;

const Layout: React.FunctionComponent<LayoutProps> = (props: LayoutProps) => {
    const themeState = useTheme();
    
    return (
        <div id='app'>
            <Head>
                <title>{props.title}</title>
                <meta name='Description' content="Brian Manley's personal website" />
            </Head>
            <Global styles={{
                body: {
                    margin: 0,
                    fontFamily: '\'Poppins\', sans-serif'
                }
            }}/>
            <SiteWrapper>
                <Header className='page-header'>
                    <ToggleButton onClick={(): void => themeState.toggle()}>
                        { themeState.dark ? '☀️' : '🌙' }
                    </ToggleButton>
                </Header>
                <ContentWrapper id='wrapper'>
                    {props.children}
                </ContentWrapper>
                <SocialBar />
            </SiteWrapper>
        </div>
    );
};

export default Layout;
