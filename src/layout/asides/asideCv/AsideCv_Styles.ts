import {theme} from "../../../styles/theme";
import {Button} from "../../../components/Button";
import styled from "styled-components";
import photo from '../../../assets/images/avatar.webp'
import {TitleH3} from "../../../components/TitleH3";
import {font} from "../../../styles/Common";
import {Container} from "../../../components/Container";


const AsideCv = styled.aside`
  position: relative;
  grid-area: cv;
  height: max-content;
  max-width: 304px;
  width: 100%;
  background-color: ${theme.colors.white};


  ${Button} {
    width: 100%;
    height: 40px;
    gap: 19px;
    border-radius: 5px;
    transition: ${theme.animations.transition};

    :hover {
      color: ${theme.colors.white};

      &svg {
        fill: ${theme.colors.white};
      }
    }
  }
  
  @media ${theme.media.middle} {
    max-width: 500px;
    //margin: 0 30px;
  }
`

// ---------CvContainer--------------

const CvContainer = styled(Container)`
padding: 25px 40px;
`


// ---------CardContainer--------------

const CardContainer = styled.div`
  padding: 25px 0;
  ::after {
    content: '';
    width: 100%;
    height: 2px;
    background-color: ${theme.colors.background};
    position: absolute;
    bottom: 0;
    left: 0;
  }
`

// ---------Cv Header--------------

const CvHeaderCard = styled.div`
  ${CardContainer} {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
`
const Name = styled(TitleH3)`
  margin: 31px 0 15px;
`
const Avatar = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 150px;
  background-image: url(${photo});
  background-color: ${theme.colors.avatarBg};
  background-size: 100%;
`
const Specialty = styled.span`
  ${font({lineHeight: 1.6, textTransform:'capitalize', Fmax:15, Fmin:15})};
  margin-bottom: 15px;
`


// ---------CvInfoCard--------------

const CvInfoBlock = styled.table`
  ${font({color: theme.colors.black, lineHeight: 1.6, Fmax: 15, Fmin: 15})};
  border-collapse: collapse;
  position: relative;

  th {
    text-align: start;
    font-weight: 400;
  }

  td {
    text-align: right;
  }

  tr + tr {
    td, th {
      padding-top: 10px;
    }
  }

  tr:nth-child(3) {
    td {
      color: ${theme.colors.available}
    }
  }
`
const TableHeader = styled.span`
  display: inline-block;
  padding: 0 6px;
  background-color: ${theme.colors.yellow};
`


// ---------SkillsCard--------------

const SkillsCard = styled.div`
  ${font({weight: 400, Fmax: 15, Fmin: 15})};
  position: relative;
`
const SkillsTitle = styled(TitleH3)`
  text-align: left;
  margin-bottom: 15px;
`


// ---------ExtraSkillsCard--------------

const ExtraSkillsCard = styled.div`
  margin-bottom: 25px;
  position: relative;
  
`
const CardTitle = styled(TitleH3)`
  text-align: left;
  margin-bottom: 15px;
`
const SkillsList = styled.ul`
  ${font({lineHeight: 1.6, Fmax: 15, Fmin: 15})};
  text-align: left;

  li + li {
    padding-top: 5px;
  }
`
const Skill = styled.li`

`
const Marker = styled.span`
  vertical-align: middle;
  margin-right: 15px;
  color: transparent;
`



// ---------ProgressBar--------------

type ProgressBarPropsType = {
    name?: string,
    value: number
}

const ProgressBlock = styled.table`
  padding-top: 15px;
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
  margin-bottom: 9px;
`

const ItemTitle = styled.th`
  text-align: start;
  color: ${theme.colors.paragraphFont}
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
`

const CurrentLevel = styled.td<ProgressBarPropsType>`
  text-align: end;
`

const ProgressBarContainer = styled.div`
  height: 4px;
  outline: 1px solid ${theme.colors.yellow};
  border-radius: 2.25px;
  display: flex;
  align-items: center;
  margin-top: 5px;
`

const Fill = styled.span<ProgressBarPropsType>`
  width: calc(${(props) => props.value}%);
  height: 2px;
  background-color: ${theme.colors.yellow};
  border-radius: 1px;
  margin: 0 1.5px;
`


// ---------SocialLinks--------------

const SocialLinks = styled.ul`
  display: flex;
  gap: 15px;
  

`

const SocialItem = styled.li`
`

const Link = styled.a`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.yellow};
  transition: ${theme.animations.transition};

  svg {
    transition: ${theme.animations.transition};
  }

  &:hover {
    transform: scale(1.3);

    svg {
      fill: ${theme.colors.white};
    }
  }
`




export const S = {
    CvContainer,
    AsideCv,
    CvHeaderCard,
    Name,
    Avatar,
    Specialty,
    CvInfoBlock,
    TableHeader,
    SkillsCard,
    SkillsTitle,
    ExtraSkillsCard,
    CardTitle,
    SkillsList,
    Marker,
    Skill,
    CardContainer,
    ProgressBlock,
    ItemTitle,
    CurrentLevel,
    ProgressBarContainer,
    Fill,
    SocialLinks,
    SocialItem,
    Link
}