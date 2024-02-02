import styled, {css} from "styled-components";
import {Button} from "../Button";
import {theme} from "../../styles/theme";


const MobileCv = styled.div<{ isOpen: boolean }>`
  z-index: ${props => props.isOpen ? 9999 : 999};
`

const CvBtn = styled(Button)<{ isOpen: boolean }>`
  position: fixed;
  top: 15px;
  left: 15px;
  z-index: 999;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: ${theme.animations.transition};

  :hover {
    transform: scale(1.3);
  }
`

const CvPopup = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.77);
  backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;

  // скрытие стилей скролла
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  transform: translateY(-100%);
  transition: .3s ease-in-out;

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    transform: translateY(0);
  `}
`


export const S = {
    MobileCv,
    CvBtn,
    CvPopup
}