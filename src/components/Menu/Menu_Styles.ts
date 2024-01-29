import styled from "styled-components";
import {theme} from "../../styles/theme";
import {Link} from 'react-scroll';

const Menu = styled.ul`
  display: flex;
  margin: 0 10px;
  flex-direction: column;
  gap: 42px;
  
  @media ${theme.media.tablet}{
    gap: 15px;
  }

  @media ${theme.media.mobileLandscape}{
    height: 100%;
    gap: 0;
    justify-content: space-evenly;
  }
`

const MenuItem = styled.li`
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
    display: flex;
    justify-content: left;
    gap: 20px;
    padding: 0 10px;
    width: 180px;
    height: 50px;

    // &:hover, &.active {
    //   background-color: ${theme.colors.yellow};
    //   color: ${theme.colors.darkBg};
    //   transition: transform 0.2s;
    // }
  }
`

export const S = {
    Menu,
    MenuItem,
    NavLink
}
