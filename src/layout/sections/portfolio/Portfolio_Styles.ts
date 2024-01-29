import styled, {css} from "styled-components";
import {Button} from "../../../components/Button";
import {theme} from "../../../styles/theme";
import {font} from "../../../styles/Common";


// ---------TabMenu--------------


const MenuWrap = styled.div`
  width: 100%;
  position: relative;
  margin: 0 auto 50px;
  display: flex;
  justify-content: center;
  gap: 37px;
  overflow-x: scroll;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }
  
  @media screen and (max-width: 633px) {
  justify-content: start;
}
`

const TabMenu = styled.ul`
  display: flex;
  justify-content: center;
  gap: 37px;
`

const MenuItems = styled.li`
  flex: 0 0 auto;
`
const MenuLink = styled.button<{active?: boolean}>`
  ${font({color: theme.colors.black, weight: 500, textTransform: 'capitalize', Fmax: 18, Fmin: 18})};
  transition: ${theme.animations.transition};

  :hover {
    color: ${theme.colors.yellow}
  }
   
  ${props => props.active && css<{active?: boolean}>`
    color: ${theme.colors.yellow}
  `}
`


// ---------Portfolio--------------

const Portfolio = styled.section`
  width: 100%;
`

const Description = styled.p`
`

const WorksWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`

const ImageWrap = styled.div`
  display: flex;
  position: relative;

  ${Button} {
    background-color: ${theme.colors.yellow2};
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: ${theme.animations.transition};

    svg {
      transition: ${theme.animations.transition};
      transform: translateY(20%);
    }

    :focus-visible {
      opacity: 1;
    }
  }

  &:hover {
    ${Button} {
      opacity: 1;

      svg {
        transform: translateY(0);
      }
    }
  }


  @media ${theme.media.tablet} {
    ${Button} {
      opacity: 1;
    }
  }
}
`



export const S = {
  Portfolio,
  Description,
  WorksWrap,
  ImageWrap,
  MenuWrap,
  TabMenu,
  MenuItems,
  MenuLink
}