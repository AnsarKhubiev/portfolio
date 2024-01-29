import React from 'react';
import {MobileMenu} from "./mobileMenu/MobileMenu";
import {S} from './Header_Styles'
import {DarkModeBtn} from "../../components/darkModeBtn/DarkModeBtn";
import {Container} from "../../components/Container";

export const Header: React.FC = () => {


    return (
        <S.Header>
            <Container>
                <S.HeaderContainer>
                <DarkModeBtn/>
                <MobileMenu/>
                </S.HeaderContainer>
            </Container>
        </S.Header>

    );
};

