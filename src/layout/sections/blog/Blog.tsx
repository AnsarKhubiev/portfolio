import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {PostCard} from "./postCard/PostCard";
import work1 from '../../../assets/images/work1.webp'
import work2 from '../../../assets/images/work2.webp'
import work3 from '../../../assets/images/work3.webp'
import {S} from './Blog_Styles'
import {Container} from "../../../components/Container";
import AliceCarousel from 'react-alice-carousel';

const responsive = {
    0: {items: 1, },
    685: {items: 2, },
    1000: {items: 3, }
};

const postItems = [
    {
        link: '#',
        imgSrc: work1,
        imgAlt: 'work1',
        title: 'How to make web tempates',
        cardText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna '
    },
    {
        link: '#',
        imgSrc: work2,
        imgAlt: 'work2',
        title: 'make Business card',
        cardText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna '
    },
    {
        link: '#',
        imgSrc: work3,
        imgAlt: 'work3',
        title: 'How to make Flyer Design',
        cardText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna '
    }
]

export const Blog: React.FC = () => {
    return (
        <S.Blog id={'blog'}>
            <Container>

                <SectionTitle>Blog</SectionTitle>

                <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                    consequat duis enim velit mollit. lorem ipsum
                </p>

                    <AliceCarousel
                        disableButtonsControls={true}
                        responsive={responsive}
                        mouseTracking
                    >
                    {postItems.map((item, index) => <PostCard postCardInfo={item} key={index}/>)}
                    </AliceCarousel>


            </Container>
        </S.Blog>
    );
};

