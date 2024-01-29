import React from 'react';
import {S} from './Map_Styles'
import {Container} from "../../../components/Container";

export const Map: React.FC = () => {
    return (
        <S.Map>
            <Container>
                <iframe
                    title={'Карта'}
                    src={"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12057.306629432833!2d29.3000848!3d40.9305075!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cada6cde6f1f33%3A0x5b6012e5c00be046!2shappy%20City!5e0!3m2!1sru!2str!4v1704739674784!5m2!1sru!2str"}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                >
                </iframe>
            </Container>

        </S.Map>
    );
};

