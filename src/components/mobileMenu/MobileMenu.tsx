import React, {useState} from 'react';
import {Menu} from "../Menu/Menu";
import {S} from './MobileMenu_Styles'


export const MobileMenu: React.FC = () => {
    const [menuIsOpen, setmenuIsOpen] = useState(false)
    const BurgerBtnClick = () => {setmenuIsOpen(!menuIsOpen)}

    return (
        <S.MobileMenu isOpen={menuIsOpen}>

            <S.MobileMenuPopup isOpen={menuIsOpen} onClick={()=>{setmenuIsOpen(false)}}>
            <Menu isMobileMenu/>
            </S.MobileMenuPopup>
            <S.BurgerButton isOpen={menuIsOpen} tabIndex={1} onClick={BurgerBtnClick}>
                <span></span>
            </S.BurgerButton>

        </S.MobileMenu>
    );
};

