import styled, {css} from "styled-components";
import {theme} from "../../styles/theme";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";

const Header = styled.header`
  grid-area: header;
  grid-column: 2/3;
  width: 100%;
  
  position: sticky;
  top: 0;
  z-index: 99;
  
  ${Container} {
    padding-bottom: 0;
  }
`

const HeaderContainer = styled(FlexWrapper)`
  background-color: ${theme.colors.white};
  padding: 0 50px;
  height: 40px;
  align-items: center;
  justify-content: space-between;
`

// ---------MobileMenu--------------

const MobileMenu = styled.div`
  position: relative;
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.77);
  backdrop-filter: blur(5px);
  position: fixed;
  inset: 0;
  transform: translateY(-100%);
  transition: .3s ease-in-out;

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    transform: translateY(0);
  `}
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
  width: 100%;
  height: 18px;
  vertical-align: middle;
  position: relative;
  z-index: 999;

  span {
    display: block;
    background-color: ${theme.colors.yellow};
    width: 30px;
    height: 2px;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(255, 0, 0, 0);
    `}
    &::before, &::after {
      content: '';
      position: absolute;
      display: block;
      width: 30px;
      height: 2px;
      background-color: ${theme.colors.yellow};
    }

    &::before {
      transform: translateY(-8px);
      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);
      `}
    }

    &::after {
      transform: translateY(8px);
      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0);
      `}
    }
  }
`

export const S = {
    Header,
    HeaderContainer,
    MobileMenu,
    BurgerButton,
    MobileMenuPopup
}