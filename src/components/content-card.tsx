export interface ContentCardProps {
    title: string;
    body: string;
    linkText: string;
    linkURL: string;
}

const ContentCard: React.FunctionComponent<ContentCardProps> = (props) => {
    return (
        <div>
            <h2>{ props.title }</h2>
            <p>{ props.body }</p>
            <a href={ props.linkURL}>{ props.linkText }</a>
        </div>
    );
}

export default ContentCard;
