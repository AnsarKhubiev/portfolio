import {theme} from "../../styles/theme";
import styled from "styled-components";
import {font} from "../../styles/Common";
import {Container} from "../../components/Container";

const Footer = styled.footer`
  max-width: 970px;
  position: relative;
  grid-area: footer;
  grid-column: 2 / 3;
  width: 100%;
  margin: 0 auto;
  background-color: ${theme.colors.white};
`

const FooterContainer = styled(Container)`

padding: 0;
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
    FooterContainer,
    Footer,
    Copyright
}