import React from 'react';
import {S} from './TextField_Styles'

export type TextFieldPropsType = {
    type?: string,
    labelText: string,
    id: string,
    as?: undefined | 'textarea'
}

export const FieldWrap: React.FC<TextFieldPropsType> = (props: TextFieldPropsType) => {
    return (
        <S.FieldWrap>
            <S.Field id={props.id} type={props.type} placeholder={props.labelText} as={props.as}/>
            <S.Label htmlFor={props.id}>{props.labelText}</S.Label>
        </S.FieldWrap>

    )
}