import styled from "styled-components";
import {theme} from "../styles/theme";


export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  background-color: ${theme.colors.yellow};
  font-size: 14px;
  font-weight: 600;
  color: ${theme.colors.black};
  font-family: Inter, sans-serif;
  transition: ${theme.animations.transition};

  svg {
    transition: ${theme.animations.transition};
  }
`