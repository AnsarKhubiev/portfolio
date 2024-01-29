import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {S} from '../AsideProfile_Styles'


export const ExtraSkillsCard: React.FC<{ skills: Array<string> }> = (props: { skills: Array<string> }) => {
    return (
        <S.ExtraSkillsCard>

            <S.CardContainer>
                <S.CardTitle>Extra Skills</S.CardTitle>
                <S.SkillsList>
                    {props.skills.map((skill, index) => (
                        <S.Skill key={index}>
                            <S.Marker>
                                <Icon
                                    iconId={'marker'}
                                    height={'15'}
                                    width={'15'}
                                    viewBox={'0 0 15 15'}
                                />
                            </S.Marker>
                            {skill}
                        </S.Skill>
                    ))}
                </S.SkillsList>
            </S.CardContainer>

        </S.ExtraSkillsCard>

    );
};


