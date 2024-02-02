import styled from "styled-components";
import {theme} from "../../styles/theme";
import {Link} from 'react-scroll';

const Menu = styled.ul`
  max-width: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  flex-grow: 1;


  @media ${theme.media.mobileLandscape}{
    height: 100%;
    justify-content: space-evenly;
  }
`

const NavLink = styled(Link)`
  background-color: ${theme.colors.background};
  width: 40px;
  height: 40px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.paragraphFont};
  transition: ${theme.animations.transition};
  cursor: pointer;
  
  &:hover, &.active {
    background-color: ${theme.colors.yellow};
    color: ${theme.colors.darkBg};
    transition: transform 0.2s;
    
  }
  
  @media ${theme.media.middle}{
    justify-content: left;
    gap: 20px;
    padding: 0 10px;
    width: 180px;
    height: 42px;
  }
`

export const S = {
    Menu,
    NavLink
}
