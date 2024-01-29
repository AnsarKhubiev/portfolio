import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {S} from '../Prices_Styles'

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


export const PriceCard:React.FC<PriceCardPropsType> = (props: PriceCardPropsType) => {
    return (
        <S.PriceCard {...props}>

            {props.plan.popular ? <S.PopularityLabel>most popular</S.PopularityLabel> : ''}

            <S.PlanTitle>{props.plan.title}</S.PlanTitle>

            <S.Price>
                {props.plan.price}
                <S.Time> /hour</S.Time>
            </S.Price>

            <S.Description>
                For most businesses that want to optimize web queries
            </S.Description>

            <S.ServicesList>
                {props.plan.services.map((item, index) => (
                    <S.Service key={index}>
                        <Icon
                            iconId={item.available ? 'check' : 'close'}
                            viewBox={'0 0 25 24'}
                            height={'25'}
                            width={'24'}
                        />
                        {item.available ? <S.TextOfAvailableService>{item.service}</S.TextOfAvailableService> : item.service}
                    </S.Service>
                ))}
            </S.ServicesList>

           <S.OrderBtn>order now</S.OrderBtn>

        </S.PriceCard>
    );
};




