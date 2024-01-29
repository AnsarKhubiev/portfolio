import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {S} from '../Services_Styles'



type ServiceCardPropsType = {
    service: {
        title: string,
        iconId: string,
        width: string,
        height: string,
        viewport: string,
        description: string,
    }
}

export const ServiceCard: React.FC<ServiceCardPropsType> = (props: ServiceCardPropsType) => {
    return (

                <S.ServiceCard>
                    <Icon
                        iconId={props.service.iconId || ''}
                        width={props.service.width}
                        height={props.service.height}
                        viewBox={props.service.viewport}
                    />
                    <S.ServiceTitle>{props.service.title}</S.ServiceTitle>
                    <S.Description>{props.service.description}</S.Description>
                </S.ServiceCard>
    );
};