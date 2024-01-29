import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {PriceCard} from "./priceCard/PriceCard";
import {Container} from "../../../components/Container";
import {S} from './Prices_Styles'
import AliceCarousel from 'react-alice-carousel'

const responsive = {
    0: {items: 1,},
    616: {items: 2,},
    1060: {items: 3,}
};

const silverPlan = {
    title: 'silver',
    price: '$0.00',
    popular: false,
    services: [
        {service: 'UI Design', available: true},
        {service: 'web development', available: true},
        {service: 'logo design', available: false},
        {service: 'seo optimization', available: false},
        {service: 'wordPress integration', available: false},
        {service: '5 Websites', available: false},
        {service: 'unlimited user', available: false},
        {service: '20 gB bandwith', available: false},
    ]
};

const goldPlan = {
    title: 'gold',
    price: '$50.00',
    popular: true,
    services: [
        {service: 'UI Design', available: true},
        {service: 'web development', available: true},
        {service: 'logo design', available: true},
        {service: 'seo optimization', available: true},
        {service: 'wordPress integration', available: false},
        {service: '5 Websites', available: false},
        {service: 'unlimited user', available: false},
        {service: '20 gB bandwith', available: false},
    ]
};

const diamondPlan = {
    title: 'diamond',
    price: '$80.00',
    popular: false,
    services: [
        {service: 'UI Design', available: true},
        {service: 'web development', available: true},
        {service: 'logo design', available: true},
        {service: 'seo optimization', available: true},
        {service: 'wordPress integration', available: true},
        {service: '5 Websites', available: true},
        {service: 'unlimited user', available: true},
        {service: '20 gB bandwith', available: true},
    ]
};


export const Prices: React.FC = () => {
    return (
        <S.Prices>
            <Container>

                <SectionTitle>Price plans</SectionTitle>

                <S.Description>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                    duis enim velit mollit. lorem ipsum
                </S.Description>



                    <AliceCarousel
                        // paddingRight={30}
                        disableButtonsControls={true}
                        responsive={responsive}
                        mouseTracking
                    >
                        <PriceCard plan={silverPlan}/>
                        <PriceCard plan={goldPlan}/>
                        <PriceCard plan={diamondPlan}/>
                    </AliceCarousel>

            </Container>
        </S.Prices>
    );
};

