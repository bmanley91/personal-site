import SocialLink from "./social-link"
import styled from '@emotion/styled';

const BarDiv = styled('div')`
    background-color: black;
    overflow: auto;
`

const SocialBar = () => {
    return (
        <BarDiv id='social-bar'>
            <SocialLink type='twitter' link='https://twitter.com/bmanley91'/>
            <SocialLink type='github' link='https://github.com/bmanley91'/>
            <SocialLink type='linkedin' link='https://www.linkedin.com/in/bmanley91/'/>
        </BarDiv>
    );
}

export default SocialBar;
