import React from 'react';
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";
import {TimelineTable} from "../../../components/timelineTable/TimelineTable";
import {S} from './WorksHistory_Styles'

const WorksList = [
    {
        place: 'Dell Technologies',
        certificate: 'Certificate of web training',
        position: 'Lead Web Designer',
        date: 'Jan 1016 - Dec 2021',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.'
    },
    {
        place: 'IBM',
        certificate: 'Certificate of web training',
        position: 'Junior Web Designer',
        date: 'Jan 1016 - Dec 2021',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.'
    },
    {
        place: 'HP Enterprise',
        certificate: 'Certificate of web training',
        position: 'Senior Web Designer',
        date: 'Jan 1016 - Dec 2021',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.'
    }
]

export const WorkHistory:React.FC = () => {
    return (
        <S.WorkHistory>
            <Container>

                <SectionTitle>Work History</SectionTitle>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                    duis
                    enim velit mollit. lorem ipsum</p>
                <TimelineTable items={WorksList}/>

            </Container>

        </S.WorkHistory>
    );
};