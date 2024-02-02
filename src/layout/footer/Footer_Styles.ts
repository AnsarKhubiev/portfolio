import {theme} from "../../styles/theme";
import styled from "styled-components";
import {font} from "../../styles/Common";

const Footer = styled.footer`
  max-width: 970px;
  margin: 0 auto;
  grid-area: footer;
  grid-column: 2 / 3;
  width: 100%;
  background-color: ${theme.colors.white};
`

const Copyright = styled.footer`
  ${font({color: theme.colors.black, lineHeight: 1.6, Fmax: 15, Fmin: 15})};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 10px 0;
`

export const S = {
    Footer,
    Copyright
}