import React from 'react';
import { ContentCardProps } from './content-card';
import ContentCard from './content-card';
import styled from '@emotion/styled-base';

export interface ContentListProps {
    title: string;
    contentCardPropArray: ContentCardProps[];
}

const CardListUl = styled('ul')`
    list-style: none;
    padding-inline-start: 0;
`;

const ContentList: React.FunctionComponent<ContentListProps> = (props) => {
    const cardList = props.contentCardPropArray.map((cardProps) => {
        return(
            <li key={`content-card-${cardProps.title}`}>
                <ContentCard 
                    title={cardProps.title}
                    body={cardProps.body}
                    linkText={cardProps.linkText}
                    linkURL={cardProps.linkURL} 
                />
            </li>
        );
    });

    return(
        <div>
            <h1>{ props.title }</h1>
            <CardListUl>
                {cardList}
            </CardListUl>
        </div>
    );
};

export default ContentList;