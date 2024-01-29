import styled from "styled-components";
import {theme} from "../styles/theme";
import {font} from "../styles/Common";

type SectionTitlePropsType = {
    textAlign?: string
}

export const SectionTitle = styled.h2<SectionTitlePropsType>`
  ${font({color: theme.colors.black, textTransform: 'capitalize', weight: 700, lineHeight: 1.3, Fmin: 32, Fmax: 32})};
  text-align: ${props => props.textAlign || 'center'};
  margin-bottom: 25px;
`