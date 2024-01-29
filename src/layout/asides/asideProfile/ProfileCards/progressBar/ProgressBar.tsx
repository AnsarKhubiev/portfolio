import React from 'react';
import {S} from '../../AsideProfile_Styles'

export const ProgressBar: React.FC<{ name: string, value: number }> = (props: { name: string, value: number }) => {
    return (
        <S.ProgressBlock>
            <tr>
                <S.ItemTitle>{props.name}</S.ItemTitle>
                <S.CurrentLevel {...props}>{props.value}%</S.CurrentLevel>
            </tr>
            <tr>
                <td colSpan={2}>
                    <S.ProgressBarContainer>
                        <S.Fill value={props.value}/>
                    </S.ProgressBarContainer>
                </td>
            </tr>
        </S.ProgressBlock>
    );
};



