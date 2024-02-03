import {Button} from "../../../components/Button";
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {theme} from "../../../styles/theme";
import {font} from "../../../styles/Common";


const Contacts = styled.section`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 70px 30px;
`

const FormWrap = styled.div`
  flex: 1 1 345px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`

const FormTitle = styled(SectionTitle)`
  text-align: left;
`

const InfoCardsBlock = styled.div`
  max-width: 700px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 18px;
  flex: 1 1 345px;
`

const CardsWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Form = styled.form`
  background-color: ${theme.colors.white};
  padding: 55px 25px 25px;
  display: flex;
  flex-direction: column;

  div:nth-last-child(n+3) {
    margin-bottom: 55px;
  }

  div:nth-child(4) {
    margin-bottom: 25px;
  }
`

const SendBtn = styled(Button)`
  width: 159px;
  height: 35px;
  border-radius: 5px;

  :hover {
    color: ${theme.colors.white};
  };
`



// ---------ContactInfoCard--------------

const ContactInfoCard = styled.div`
  background-color: ${theme.colors.white};
  padding: 25px 25px 15px;
  
  display: grid;
  grid-template: repeat(4, auto) / repeat(2, auto);
  grid-gap: 14px;
`

const IconBg = styled.span`
  grid-area: 1/1/1/3;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin: 0 auto 16px;
  border-radius: 20px;
  background-color: ${theme.colors.yellow};
`

const ContactLabel = styled.span`
  ${font({lineHeight: 1.236, weight:500, Fmax:18, Fmin:18})};
  white-space: nowrap;
`

const ContactValue = styled.span`
  text-align: right;
  ${font({lineHeight: 1.6, Fmax:15, Fmin:15})};
  white-space: nowrap;
`


export const S = {
    Contacts,
    FormWrap,
    FormTitle,
    Form,
    SendBtn,
    InfoCardsBlock,
    ContactInfoCard,
    CardsWrap,
    IconBg,
    ContactValue,
    ContactLabel
}