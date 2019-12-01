import styled from "@emotion/styled-base";

export interface ContentCardProps {
    title: string;
    body: string;
    linkText: string;
    linkURL: string;
}

const ContentCardDiv = styled('div')`
    border: 1px solid;
    border-color: black;
    border-radius: 15px;
    padding: 10px;
    margin-bottom: 10px;
`

const CardHeader = styled('h2')`
    margin: 0;
`

const ContentCard: React.FunctionComponent<ContentCardProps> = (props) => {
    return (
        <ContentCardDiv>
            <CardHeader>{ props.title }</CardHeader>
            <p>{ props.body }</p>
            <a href={ props.linkURL} target='_blank'>{ props.linkText }</a>
        </ContentCardDiv>
    );
}

export default ContentCard;
