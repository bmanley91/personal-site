import Head from 'next/head';
import { Global } from '@emotion/core';
import SocialBar from './social-bar';
import { ReactElement } from 'react';

export interface LayoutProps {
    title: string;
    children?: ReactElement<any>
}

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
            {props.children}
            <SocialBar />
        </div>
    );
};

export default Layout;
