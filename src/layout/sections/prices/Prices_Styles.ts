import styled from "styled-components";
import {theme} from "../../../styles/theme";
import {font} from "../../../styles/Common";
import {Button} from "../../../components/Button";

const Prices = styled.section`
  position: relative;
  width: 100%;
`


// ---------PriceCard--------------

type PriceCardPropsType = {
    plan: {
        title: string,
        price: string,
        popular: boolean,
        services: Array<{
            service: string,
            available: boolean
        }>
    }
}

const PriceCard = styled.div<PriceCardPropsType>`
  user-select: none;
  background-color: ${theme.colors.white};
  box-shadow: ${props => props.plan.popular ? '0 0 10px 0 rgba(0, 0, 0, 0.15)' : 'none'};
  padding: 50px 34px 25px;
  position: relative;
  width: calc(100% - 20px);
  left: 10px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PopularityLabel = styled.span`
  ${font({color: theme.colors.black, textTransform: 'capitalize', lineHeight: 2, Fmin: 15, Fmax: 15})};
  background-color: ${theme.colors.yellow};
  width: 100%;
  text-align: center;
  position: absolute;
  top: 0;
`

const PlanTitle = styled.h4`
  ${font({color: theme.colors.black, weight: 600, lineHeight: 1.23, textTransform: 'capitalize', Fmin: 24, Fmax: 24})};
  margin-bottom: 19px;
`

const Price = styled.span`
  ${font({color: theme.colors.black, textTransform:'capitalize', weight: 700, Fmin: 32, Fmax: 32})};
`

const Time = styled.span`
  ${font({color: theme.colors.black, textTransform:'capitalize', weight: 400, Fmin: 15, Fmax: 15})};
`

const Description = styled.p`
  padding: 9px 0 20px;
`

const ServicesList = styled.ul`
  padding-bottom: 20px;
  align-self: start;
`

const Service = styled.li`
  display: flex;
  gap: 15px;
  align-items: center;
  ${font({textTransform:'capitalize', Fmin: 15, Fmax: 15})};
  
  :nth-last-child(n+2) {
    padding-bottom: 16px;
  }
`

const TextOfAvailableService = styled.span`
  ${font({color: theme.colors.black})};
`

const OrderBtn = styled(Button)`
  background-color: ${theme.colors.white};
  ${font({color: theme.colors.black, textTransform: 'uppercase', weight: 700, Fmin: 14, Fmax: 14})};
  width: 169px;
  height: 38px;
  border-radius: 30px;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.15);

  :hover {
    background-color: ${theme.colors.yellow};
    color: ${theme.colors.white};
  }
`

export const S = {
    Prices,
    PriceCard,
    PopularityLabel,
    PlanTitle,
    Price,
    Time,
    Description,
    ServicesList,
    Service,
    TextOfAvailableService,
    OrderBtn
}