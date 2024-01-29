import React from 'react';
import {SocialLinks} from "./socialLinks/SocialLinks";
import {S} from '../AsideProfile_Styles'

export const ProfileHeaderCard: React.FC = () => {
    return (
        <S.ProfileHeaderCard>
            <S.CardContainer>
                <S.Avatar/>
                <S.Name>Rayan Adlardard</S.Name>
                <S.Specialty>Front-end Developer</S.Specialty>
                <SocialLinks/>
            </S.CardContainer>
        </S.ProfileHeaderCard>
    );
};