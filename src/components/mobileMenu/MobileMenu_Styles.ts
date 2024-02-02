import styled, {css} from "styled-components";
import {theme} from "../../styles/theme";


// ---------MobileMenu--------------

const MobileMenu = styled.div<{ isOpen: boolean }>`
  z-index: ${props => props.isOpen ? 9999 : 999};
  position: fixed;
  top: 15px;
  right: 15px;
  flex-grow: 1;
  
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

  span {
    margin-left: auto;
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
    MobileMenu,
    BurgerButton,
    MobileMenuPopup
}