import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {S} from '../Reviews_Styles'
import {Icon} from "../../../../components/icon/Icon";
import {TitleH3} from "../../../../components/TitleH3";
import profile1 from "../../../../assets/images/profile1.webp";
import profile2 from "../../../../assets/images/profile2.webp";
import profile3 from "../../../../assets/images/profile3.webp";
import '../../../../styles/Slider.css'


type SlidePropsType = {
    title: string,
    value: number,
    text: string,
    name: string,
    speciality: string,
    profileImg: string
}

const responsive = {
    0: {items: 1,},
    678: {items: 2,},
    1000: {items: 3,}
};


const Slide = (props: SlidePropsType) => {
    return (
        <S.Slide>

            <S.Rating>
                {Array(props.value).fill(null).map((index) => <Icon iconId={'star'} key={index}/>)}
            </S.Rating>

            <TitleH3>{props.title}</TitleH3>
            <S.Description>{props.text}</S.Description>

            <FlexWrapper align={'stretch'}>
                <img src={props.profileImg} alt={props.profileImg}/>

                <S.NameWrap>
                    <S.Name>{props.name}</S.Name>
                    <span>{props.speciality}</span>
                </S.NameWrap>
            </FlexWrapper>

        </S.Slide>
    )
}


const items = [
    <Slide
        title={'Great Quality!'}
        value={5}
        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....'}
        name={'James Gouse'}
        speciality={'Graphic Designer'}
        profileImg={profile1}
    />,
    <Slide
        title={'Amazing work!!!'}
        value={5}
        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....'}
        name={'Tiana Philips'}
        speciality={'Photographer'}
        profileImg={profile2}
    />,
    <Slide
        title={'Great Quality!'}
        value={5}
        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....'}
        name={'Talan Westervelt'}
        speciality={'Business man'}
        profileImg={profile3}
    />
];

export const Slider = () => (
    <AliceCarousel
        disableButtonsControls={true}
        mouseTracking
        items={items}
        responsive={responsive}
    />
);


