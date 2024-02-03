import styled from "styled-components";
import {theme} from "../../../styles/theme";
import {font} from "../../../styles/Common";
import {Button} from "../../../components/Button";
import {FlexWrapper} from "../../../components/FlexWrapper";


const Main = styled(FlexWrapper)`
  position: relative;
  width: 100%;
  padding: 0 53px 0 60px;
  margin-bottom: 68px;
  background-color: ${theme.colors.white};
  justify-content: center;
  align-items: end;
  flex-wrap: wrap;

  @media ${theme.media.middle} {
    padding: 0 32px;
    margin-bottom: 17px;
  }
`

const Image = styled.img`
  max-width: 331px;
  width: 100%;
`

const TextWrap = styled(FlexWrapper)`
  margin: 93px 0 74px;
  flex: 1 1 437px;
  flex-direction: column;
  align-items: start;
  justify-content: space-between ;
  
  @media ${theme.media.middle}{
    margin: 40px 0 51px;
  }
`

const Name = styled.span`
  display: inline-block;
  ${font({color: theme.colors.black, lineHeight:1.236, weight: 700, Fmin: 48, Fmax: 48})};
`

const MainTitle = styled.h1`
  ${font({color: theme.colors.black, lineHeight:1.236, weight: 700, Fmin: 48, Fmax: 48})};

  span {
    color: ${theme.colors.yellow};
  }
`

const Description = styled.p`
  ${font({lineHeight:1.5, weight: 400, Fmin: 16, Fmax: 16})};
  max-width: 424px;
  margin: 18px 0 25px;

  @media ${theme.media.tablet} {
    margin: 40px 0 35px;
  }
`

const MainBtn = styled(Button)`
  ${font({color: theme.colors.black, weight: 500, Fmin: 16, Fmax: 16})};
  padding: 16px 32px;
  border-radius: 5px;
  gap: 10px;
  
  :hover {
    color: ${theme.colors.white};

    &svg {
      fill: ${theme.colors.white}
    }
  }
;

  @media ${theme.media.tablet} {
    margin: 0 0 52px;
  }
`


export const S = {
    Main,
    Image,
    TextWrap,
    Name,
    MainTitle,
    Description,
    MainBtn
}