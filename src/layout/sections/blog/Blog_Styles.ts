import styled from "styled-components";
import {theme} from "../../../styles/theme";
import {TitleH3} from "../../../components/TitleH3";
import {font} from "../../../styles/Common";

const Blog = styled.section`
  position: relative;
  width: 100%;
`


// ---------PostCard--------------

const PostCard = styled.div`
  position: relative;
  width: calc(100% - 20px);
  left: 10px;
  display: flex;
  flex-direction: column;
  user-select: none;
  
  background-color: ${theme.colors.white};
  
  img {
    max-width: 310px;
    width: 100%;
    align-self: center;
    pointer-events: none;
  }
`

const Title = styled(TitleH3)`
`

const Text = styled.p`
  ${font({lineHeight: 1.6, Fmax: 15, Fmin: 15})};
  margin: 8px 0 8px;
`

const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  margin: 25px 25px 18px;
`

const Link = styled.a`
  ${font({weight: 500, Fmax: 18, Fmin: 18})};
  display: flex;
  align-items: center;
  color: ${theme.colors.yellow};
`


export const S = {
    Blog,
    PostCard,
    Title,
    Text,
    Link,
    CardDescription
}