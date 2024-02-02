import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {S} from './Footer_Styles'

export const Footer: React.FC = () => {
    return (
            <S.Footer>
                <S.Copyright>
                    <Icon
                        iconId={'copyright'}
                        width={'24'}
                        height={'24'}
                        viewBox={'0 0 24 24'}
                    />
                    2021 All Rights Reserved.
                </S.Copyright>
            </S.Footer>
    );
};



