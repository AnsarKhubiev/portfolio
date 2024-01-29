import styled from "styled-components";
import {theme} from "../../styles/theme";
import {TitleH3} from "../TitleH3";
import {font} from "../../styles/Common";

const TimelineTable = styled.table`
  background-color: ${theme.colors.white};
  border-collapse: collapse;

  tr {
    display: block;
    padding: 40px 30px;
    text-align: left;
    vertical-align: top;
    position: relative;

    th h3, td h3 {
      text-align: left;
      margin-bottom: 28px;
    }

    :nth-last-child(n+2) ::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: ${theme.colors.background};
      bottom: 0;
      right: 0;
    }
  }

  td {
    width: 58%;
  }

  @media screen and (max-width: 700px) {
    th, td {
      display: block;
      width: 100%;
    }

    tr {
      padding: 30px 32px;

      th h3 {
        margin-bottom: 5px;
      }

      td h3 {
        text-align: center;
        margin: 30px 0 10px;
      }
    }
  }
`

const PlaceTitle = styled(TitleH3)`
  ${font({color: theme.colors.black, textTransform: 'capitalize', weight: 500, lineHeight: 1.48, Fmin: 18, Fmax: 18})};
`

const CertificateTitle = styled(TitleH3)`
  ${font({color: theme.colors.black, textTransform: 'capitalize', weight: 500, lineHeight: 1.48, Fmin: 18, Fmax: 18})};
`

const Speciality = styled.span`
  ${font({color: theme.colors.black, textTransform: 'capitalize', weight: 400, lineHeight: 1.6, Fmin: 15, Fmax: 15})};
`

const Date = styled.span`
  ${font({color: theme.colors.white, weight: 400, Fmin: 10, Fmax: 10})};
  margin-left: 21px;
  vertical-align: middle;
  padding: 3px 7px;
  background-color: ${theme.colors.yellow};
  border-radius: 1px;
  
  @media ${theme.media.middle} {
    display: block;
    width: max-content;
    margin: 0;
  }
`

const Description = styled.p`
  ${font({lineHeight: 1.6, Fmin: 15, Fmax: 15})};
`

export const S = {
    TimelineTable,
    PlaceTitle,
    CertificateTitle,
    Speciality,
    Date,
    Description
}