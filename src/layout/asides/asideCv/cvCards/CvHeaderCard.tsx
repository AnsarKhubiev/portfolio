import React from 'react';
import {SocialLinks} from "./socialLinks/SocialLinks";
import {S} from '../AsideCv_Styles'

export const CvHeaderCard: React.FC = () => {
    return (
        <S.CvHeaderCard>
            <S.CardContainer>
                <S.Avatar/>
                <S.Name>Rayan Adlardard</S.Name>
                <S.Specialty>Front-end Developer</S.Specialty>
                <SocialLinks/>
            </S.CardContainer>
        </S.CvHeaderCard>
    );
};