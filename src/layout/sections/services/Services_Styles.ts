import styled from "styled-components";
import {theme} from "../../../styles/theme";
import {TitleH3} from "../../../components/TitleH3";
import {font} from "../../../styles/Common";

const Services = styled.section`
  position: relative;
  width: 100%;
`

const AdvertisementCard = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 310px;
  min-height: 225px;
  padding: 28px;
  background-color: ${theme.colors.white};
`
const AdvertTitle = styled(TitleH3)`
`

const AdvertDescription = styled.p`
  text-align: center;
  margin: 22px 0 30px;
`

const OrderLink = styled.a`
  display: flex;
  align-items: center;
  ${font({family: 'Roboto, sans-serif', Fmax: 12, Fmin: 12, color: theme.colors.yellow, textTransform: 'uppercase'})}
`

// ---------ServiceCard--------------

const ServiceCard = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 310px;
  min-height: 225px;
  padding: 28px;
  background-color: ${theme.colors.white};
`

const ServiceTitle = styled(TitleH3)`
  margin: 26px 0 15px;
`

const Description = styled.span`
  ${font({Fmax: 15, Fmin: 15, lineHeight: 1.6})}
`

export const S = {
    Services,
    AdvertisementCard,
    AdvertTitle,
    AdvertDescription,
    OrderLink,
    ServiceCard,
    ServiceTitle,
    Description
}