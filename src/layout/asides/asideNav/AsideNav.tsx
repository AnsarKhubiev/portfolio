import React from 'react';
import styled from "styled-components";
import {Menu} from "../../../components/Menu/Menu";
import {DarkModeBtn} from "../../../components/darkModeBtn/DarkModeBtn";
import {theme} from "../../../styles/theme";


export const AsideNav: React.FC = () => {
    return (
        <StyledAsideNav>
            <DarkModeBtn/>
            <Menu/>
        </StyledAsideNav>
    );
};

const StyledAsideNav = styled.aside`
  grid-area: nav;
  max-width: 106px;
  width: 100%;
  height: 100vh;
  padding: 50px 34px 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 174px;
  
  background: ${theme.colors.whiteFont};
  box-shadow: 4px 0 10px rgba(47, 122, 249, 0.10);
  position: sticky;
  top: 0;
`



