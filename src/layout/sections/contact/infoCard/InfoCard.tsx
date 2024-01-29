import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {theme} from "../../../../styles/theme";
import {S} from '../Contact_Styles'

type ContactInfoCardPropsType = {
    contactItems: {
        iconId: string,
        listItems: Array<{ name: string, value: string }>
    }
}

export const InfoCard:React.FC<ContactInfoCardPropsType> = (props: ContactInfoCardPropsType) => {
    return (
        <S.ContactInfoCard>

                <S.IconBg>
                    <Icon
                        iconId={props.contactItems.iconId}
                        color={theme.colors.black}
                        width={'18'}
                        height={'18'}
                        viewBox={'0 0 18 18'}
                    />
                </S.IconBg>

                <S.ContactInfo>
                    {props.contactItems.listItems.map((item, index) => (
                        <tr key={index}>
                            <th>{item.name}:</th>
                            <td>{item.value}:</td>
                        </tr>
                    ))}
                </S.ContactInfo>

        </S.ContactInfoCard>
    );
};