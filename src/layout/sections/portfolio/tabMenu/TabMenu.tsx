import React from 'react';
import {S} from '../Portfolio_Styles'


export type TypeStatusType = 'all' | 'ui' | 'web' | 'logo' | 'branding'

type TabMenuPropsType = {
    tabsItems: Array<{ title: string, status: TypeStatusType }>,
    changeFilterStatus: (value: TypeStatusType) => void,
    currentFilterStatus: string
}


export const TabMenu = (props: TabMenuPropsType) => {
    return (
        <S.MenuWrap>

                {props.tabsItems.map((item) => (

                    <S.MenuLink
                        active={props.currentFilterStatus === item.status}
                        onClick={() => {props.changeFilterStatus(item.status)}}
                    >
                        {item.title}
                    </S.MenuLink>
                ))}

        </S.MenuWrap>
    );
};

