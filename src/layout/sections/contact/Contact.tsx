import React from 'react';
import {InfoCard} from "./infoCard/InfoCard";
import {FieldWrap} from "../../../components/textField/FieldWrap";
import {S} from './Contact_Styles'
import {Container} from "../../../components/Container";

const address = {
    iconId: 'location',
    listItems: [
        {name: 'Country', value: 'Bangladesh'},
        {name: 'City', value: 'Dhaka'},
        {name: 'Street', value: '35 vhatara, Badda'}
    ]
}

const messengers = {
    iconId: 'mail',
    listItems: [
        {name: 'Email', value: 'youremail@gmail.com'},
        {name: 'Skype', value: '@yourusername'},
        {name: 'Telegram', value: '@yourusername'}
    ]
}

const phones = {
    iconId: 'mobile',
    listItems: [
        {name: 'Support services', value: '15369'},
        {name: 'Office', value: '+58 (021)356 587 235'},
        {name: 'Personal', value: '+58 (021)356 587 235'}
    ]
}


export const Contact: React.FC = () => {
    return (
        <S.Contacts id={'contact'}>
            <Container>
                <S.FormWrap>

                    <S.FormTitle>Leave us your info</S.FormTitle>
                    <S.Form action="" method={''}>
                        <FieldWrap id={'userName'} labelText={'Your Full Name ( Required)'}/>
                        <FieldWrap id={'userEmail'} labelText={'Your Email ( Required)'} type={'email'}/>
                        <FieldWrap id={'subject'} labelText={'Subject'}/>
                        <FieldWrap id={'userMessage'} labelText={'Your Message'} as={'textarea'}/>
                        <S.SendBtn>Send message</S.SendBtn>
                    </S.Form>

                </S.FormWrap>

                <S.InfoCardsBlock>

                    <S.FormTitle>Contact information</S.FormTitle>
                    <S.CardsWrap>
                        <InfoCard contactItems={address}/>
                        <InfoCard contactItems={messengers}/>
                        <InfoCard contactItems={phones}/>
                    </S.CardsWrap>

                </S.InfoCardsBlock>
            </Container>


        </S.Contacts>
    );
};