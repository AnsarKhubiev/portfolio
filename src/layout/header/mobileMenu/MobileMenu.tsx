import React, {useState} from 'react';
import {Menu} from "../../../components/Menu/Menu";
import {S} from '../Header_Styles'


export const MobileMenu: React.FC = () => {
    const [menuIsOpen, setmenuIsOpen] = useState(false)
    const BurgerBtnClick = () => {setmenuIsOpen(!menuIsOpen)}

    return (
        <S.MobileMenu >

            <S.BurgerButton isOpen={menuIsOpen} tabIndex={1} onClick={BurgerBtnClick}>
                <span></span>
            </S.BurgerButton>

            <S.MobileMenuPopup isOpen={menuIsOpen} onClick={()=>{setmenuIsOpen(false)}}>
            <Menu isMobileMenu/>
            </S.MobileMenuPopup>

        </S.MobileMenu>
    );
};

