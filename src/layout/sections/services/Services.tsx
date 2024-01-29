import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {ServiceCard} from "./serviceCard/ServiceCard";
import {Icon} from "../../../components/icon/Icon";
import {S} from './Services_Styles'
import {Container} from "../../../components/Container";


const serviceItems = [
    {
        title: 'web development',
        iconId: 'coding',
        width: '68',
        height: '68',
        viewport: '0 0 68 68',
        description: "blog, e-commerce"
    },
    {
        title: 'uI/uX design',
        iconId: 'illustration',
        width: '68',
        height: '68',
        viewport: '0 0 68 68',
        description: "Mobile app, website design"
    },
    {
        title: 'sound design',
        iconId: 'microphone',
        width: '74',
        height: '74',
        viewport: '0 0 74 74',
        description: "Voice Over, Beat Making"
    },
    {
        title: 'game design',
        iconId: 'gameDevelopment',
        width: '74',
        height: '74',
        viewport: '0 0 74 74',
        description: "Character Design, Props & Objects"
    },
    {
        title: 'photography',
        iconId: 'photographer',
        width: '78',
        height: '78',
        viewport: '0 0 78 78',
        description: "portrait, product photography"
    }
]

export const Services: React.FC = () => {
    return (
        <S.Services id={'services'}>

            <Container>

                <SectionTitle>my services</SectionTitle>

                <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                    duis enim velit mollit. lorem ipsum
                </p>

                <FlexWrapper wrap={'wrap'} justify={'space-between'} gap={'16px'}>

                    {serviceItems.map((item, index) => <ServiceCard service={item} key={index}/>)}

                    <S.AdvertisementCard>

                        <S.AdvertTitle>advertising</S.AdvertTitle>
                        <S.AdvertDescription>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a
                            urna viverra morbi.
                        </S.AdvertDescription>


                        <S.OrderLink href={''}>
                            order now
                            <Icon iconId={'GreaterThanSign'}
                                  width={'20'}
                                  height={'20'}
                                  viewBox={'0 0 20 20'}
                            />
                        </S.OrderLink>

                    </S.AdvertisementCard>
                </FlexWrapper>

            </Container>

        </S.Services>
    )
        ;
};

