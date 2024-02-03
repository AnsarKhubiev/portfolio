import styled from "styled-components";
import {theme} from "../../../styles/theme";
import {TitleH3} from "../../../components/TitleH3";
import {font} from "../../../styles/Common";

const Reviews = styled.section`
  position: relative;
  width: 100%;
`


// ---------Slide--------------

const Slide = styled.div`
  position: relative;
  width: calc(100% - 26px);
  left: 13px;
  padding: 25px;
  background-color: ${theme.colors.white};
  user-select: none;

  ${TitleH3} {
    margin-top: 16px;
    text-align: left;
  }
`

const Rating = styled.span`
  display: flex;
  gap: 10px;
`

const Description = styled.p`
  ${font({textTransform:'capitalize', lineHeight:1.6, Fmax:15, Fmin:15})};
  margin: 18px 0 22px;
`
const Name = styled(TitleH3)`
  text-align: left;
`

const NameWrap = styled.div`
  margin-left: 13px;
`

export const S = {
    Reviews,
    Slide,
    Rating,
    Description,
    Name,
    NameWrap
}