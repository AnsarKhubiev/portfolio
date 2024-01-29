import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Slider} from "./slider/Slider";
import {S} from './Reviews_Styles'
import {Container} from "../../../components/Container";


export const Reviews = () => {
    return (
        <S.Reviews>

            <Container>
                <SectionTitle>recommendations</SectionTitle>
                <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                    duis enim velit mollit. lorem ipsum
                </p>
                <Slider/>
            </Container>

        </S.Reviews>
    );
};


