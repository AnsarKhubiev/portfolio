import {Button} from "../../../components/Button";
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {theme} from "../../../styles/theme";
import {font} from "../../../styles/Common";
import {Container} from "../../../components/Container";

const Contacts = styled.section`
  position: relative;

  ${Container} {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
  }
`
const FormWrap = styled.div`
  flex: 1 1 345px;
`

const FormTitle = styled(SectionTitle)`
  text-align: left;
`

const InfoCardsBlock = styled.div`
  max-width: 370px;
  width: 100%;
  display: flex;
  flex-direction: column;
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
  padding: 25px 25px 16px;
`
const IconBg = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin: 0 auto 31px;
  border-radius: 20px;
  background-color: ${theme.colors.yellow};
`

const ContactInfo = styled.table`
  width: 100%;
  border-collapse: collapse;

  th {
  ${font({lineHeight: 1.236, weight:500, Fmax:18, Fmin:18})};
    text-align: left;
  }
  
  tr:nth-child(2) th {
    padding: 16px 0 16px;
  };
  
  td {
    text-align: right;
    font-size: 15px;
    line-height: 24px;
  };
`

export const S = {
    Contacts,
    FormWrap,
    FormTitle,
    InfoCardsBlock,
    CardsWrap,
    Form,
    SendBtn,
    ContactInfoCard,
    IconBg,
    ContactInfo
}