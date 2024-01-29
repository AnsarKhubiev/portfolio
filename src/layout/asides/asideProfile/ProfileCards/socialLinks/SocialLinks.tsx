import React from 'react';
import {Icon} from "../../../../../components/icon/Icon";
import {S} from '../../AsideProfile_Styles'
import {theme} from "../../../../../styles/theme";

const socialItems = [
    {social: 'facebook', title: 'Facebook'},
    {social: 'instagram', title: 'Instagram'},
    {social: 'twitter', title: 'Twitter'},
    {social: 'linkedin', title: 'Linkedin'},
    {social: 'youtube', title: 'Youtube'},
    {social: 'dribbble', title: 'Dribbble'}
]

export const SocialLinks:React.FC = () => {
    return (
        <S.SocialLinks>

            {socialItems.map((item, index) => (

                <S.SocialItem key={index}>
                    <S.Link href="" aria-label={item.social}>
                        <Icon iconId={item.social}
                              viewBox={'0 0 14 14'}
                              width={'14'}
                              height={'14'}
                              color={theme.colors.black}
                        />
                    </S.Link>
                </S.SocialItem>

            ))}

        </S.SocialLinks>
    );
};

