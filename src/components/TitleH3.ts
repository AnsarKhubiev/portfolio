import styled from "styled-components";
import {theme} from "../styles/theme";
import {font} from "../styles/Common";

type TitleH3PropsType = {
    textAlign?: string,
    margin?: string,
    padding?: string
}

export const TitleH3 = styled.h3<TitleH3PropsType>`
  ${font({color: theme.colors.black, weight: 500, textTransform: 'capitalize', lineHeight: 1.236, Fmax: 18, Fmin: 18})};
  text-align: ${props => props.textAlign || 'center'};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
`