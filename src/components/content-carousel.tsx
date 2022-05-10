import React from 'react';
import Slider from 'react-slick';
import { ContentCardProps } from './content-card';
import ContentCard from './content-card';

export interface ContentCarouselProps {
    title: string;
    contentCardPropArray: ContentCardProps[];
}

const ContentCarousel: React.FunctionComponent<ContentCarouselProps> = (props) => {
    const cardList = props.contentCardPropArray.map((cardProps) => {
        return(
            <div key={`content-card-${cardProps.title}`}>
                <ContentCard 
                    title={cardProps.title}
                    body={cardProps.body}
                    linkText={cardProps.linkText}
                    linkURL={cardProps.linkURL} 
                />
            </div>
        );
    });
    
    const settings = {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        draggable: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return(
        <div>
            <h1>{ props.title }</h1>
            <Slider {...settings}>
                {cardList}
            </Slider>
        </div>
    );
};

export default ContentCarousel;
