import styled from '@emotion/styled';
import { ReactComponentElement } from 'react';

const MainBodyDiv = styled('div')`
    font-family: 'Poppins', sans-serif;
    background-color: white;
`

const MainBody: React.FunctionComponent = () => {
    return (
        <MainBodyDiv>
            <h1>Brian Manley</h1>
            <h2>Software Engineer</h2>
            <h3>New York, NY</h3>
        </MainBodyDiv>
    );
}

export default MainBody;