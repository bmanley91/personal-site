import styled from '@emotion/styled';

const IntroSectionDiv = styled('div')`
    background-color: white;
    overflow: auto;
`

const LeftSection = styled('div')`
    float: left;
    width: 50%;
`

const RightSection = styled('div')`
    float: right;
    width: 50%;
`

const IntroSection: React.FunctionComponent = () => {
    return (
        <IntroSectionDiv>
            <LeftSection>
                <h1>Brian Manley</h1>
                <h2>Software Engineer</h2>
                <h3>New York, NY</h3>
            </LeftSection>
            <RightSection>
                <p>Hi I'm Brian!</p>
                <p>Welcome to my corner of the internet! This site has a bunch of stuff that I've worked on, learned from, or just think is cool.</p>
            </RightSection>
        </IntroSectionDiv>
    );
}

export default IntroSection;