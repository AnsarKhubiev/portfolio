import React from 'react';
import {S} from './TimeLineTable_Styles'


type TimelineTablePropsType = {
    items: Array<{
        place: string,
        certificate: string,
        position: string,
        date: string,
        description: string
    }>
}

export const TimelineTable: React.FC<TimelineTablePropsType> = (props: TimelineTablePropsType) => {
    return (
        <S.TimelineTable>

            {props.items.map((item, index) => (
                <tr key={index}>
                    <th>
                        <S.PlaceTitle> {item.place} </S.PlaceTitle>
                        <S.Speciality> {item.position} </S.Speciality>
                        <S.Date> {item.date} </S.Date>
                    </th>
                    <td>
                        <S.CertificateTitle> {item.certificate} </S.CertificateTitle>
                        <S.Description> {item.description} </S.Description>
                    </td>
                </tr>
            ))}

        </S.TimelineTable>
    )
};



