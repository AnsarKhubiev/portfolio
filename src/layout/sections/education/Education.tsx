import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {TimelineTable} from "../../../components/timelineTable/TimelineTable";
import {Container} from "../../../components/Container";
import {S} from './Education_Styles'

const EducationList = [
    {
        place: 'University of Toronto',
        certificate: 'Certificate of web training',
        position: 'Student',
        date: 'Jan 1016 - Dec 2021',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.'
    },
    {
        place: 'Programming Course',
        certificate: 'Certificate of web training',
        position: 'Student',
        date: 'Jan 1016 - Dec 2021',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.'
    },
    {
        place: 'Web developer courses',
        certificate: 'Certificate of web training',
        position: 'Student',
        date: 'Jan 1016 - Dec 2021',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.'
    }
]

export const Education: React.FC = () => {
    return (
        <S.Education id={'cv'}>

            <Container>

                <SectionTitle>Education</SectionTitle>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                    duis
                    enim velit mollit. lorem ipsum</p>
                <TimelineTable items={EducationList}/>

            </Container>

        </S.Education>
    );
};

