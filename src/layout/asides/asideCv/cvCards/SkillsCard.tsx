import React from 'react';
import {ProgressBar} from "./progressBar/ProgressBar";
import {S} from '../AsideCv_Styles'

type LanguagesPropsType = {
    skills: {
        title: string,
        items: Array<{
            name: string,
            value: number
        }>
    }
}

export const SkillsCard: React.FC<LanguagesPropsType> = (props: LanguagesPropsType) => {
    return (
        <S.SkillsCard>

            <S.CardContainer>

                <S.SkillsTitle>{props.skills.title}</S.SkillsTitle>

                {props.skills.items.map(item => (
                    <ProgressBar name={item.name} value={item.value}/>
                ))}

            </S.CardContainer>

        </S.SkillsCard>
    );
};


