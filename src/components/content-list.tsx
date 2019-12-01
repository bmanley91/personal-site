import { ContentCardProps } from './content-card';
import ContentCard from './content-card';

export interface ContentListProps {
    title: string;
    contentCardPropArray: ContentCardProps[];
}

const ContentList: React.FunctionComponent<ContentListProps> = (props) => {
    const cardList = props.contentCardPropArray.map((cardProps) => {
        return(
            <li>
                <ContentCard title={cardProps.title} body={cardProps.body} linkText={cardProps.linkText} linkURL={cardProps.linkURL} />
            </li>
        );
    })

    return(
        <div>
            <h1>{ props.title }</h1>
            <div className='card-list-wrapper'>
                <ul>{cardList}</ul>
            </div>
        </div>
    );
};

export default ContentList;