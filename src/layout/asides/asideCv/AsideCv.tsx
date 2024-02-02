import React from 'react';
import {CvInfoCard} from "./cvCards/CvInfoCard";
import {SkillsCard} from "./cvCards/SkillsCard";
import {ExtraSkillsCard} from "./cvCards/ExtraSkillsCard";
import {CvHeaderCard} from "./cvCards/CvHeaderCard";
import {Button} from "../../../components/Button";
import {Icon} from "../../../components/icon/Icon";
import {S} from './AsideCv_Styles'

const languagesItems = {
    title: 'Languages',
    items: [
        {name: 'Bangla', value: 100},
        {name: 'English', value: 80},
        {name: 'Spanish', value: 60},
    ]
}

const skillsItems = {
    title: 'Skills',
    items: [
        {name: 'Html', value: 90},
        {name: 'CSS', value: 85},
        {name: 'Js', value: 80},
        {name: 'PHP', value: 75},
        {name: 'WordPress', value: 85},
    ]
}

const skillsList = [
    'Bootstrap, Materialize',
    'Stylus, Sass, Less',
    'Gulp, Webpack, Grunt',
    'GIT Knowledge'
]

export const AsideCv: React.FC = () => {
    return (
        <S.AsideCv>

            <S.CvContainer>

                <CvHeaderCard/>
                <CvInfoCard/>

                <SkillsCard skills={languagesItems}/>
                <SkillsCard skills={skillsItems}/>
                <ExtraSkillsCard skills={skillsList}/>

                <Button aria-label={'Download'}>
                    Download
                    <Icon
                        iconId={'download'}
                        width={'14'}
                        height={'17'}
                        viewBox={'0 0 14 17'}
                    />
                </Button>

            </S.CvContainer>

        </S.AsideCv>
    );
};







