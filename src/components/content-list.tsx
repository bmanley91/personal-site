import { ContentCardProps } from './content-card';

export interface ContentListProps {
    title: string;
    contentCardPropArray: ContentCardProps[];
}

const ContentList: React.FunctionComponent<ContentListProps> = (props) => {
    return(
        <div>
            <h1>{ props.title }</h1>
            
        </div>
    );
};

export default ContentList;