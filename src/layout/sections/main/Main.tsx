import React from 'react';
import photo from '../../../assets/images/avatar.webp'
import {Icon} from "../../../components/icon/Icon";
import {S} from './Main_Styles'
import {Container} from "../../../components/Container";


export const Main: React.FC = () => {
    return (
        <Container>
            <S.Main id={'home'}>
                <S.TextWrap>
                    <S.Name>I’m Rayan Adlrdard</S.Name>
                    <S.MainTitle>
                        <span>Front-end </span>
                        Developer
                    </S.MainTitle>
                    <S.Description>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat
                        lobortis. Natoque rutrum semper sed suspendisse nunc lectus.
                    </S.Description>
                    <S.MainBtn>
                        HIRE ME
                        <Icon iconId={'arrow'}
                              viewBox={'0 0 16 16'}
                              width={'16'}
                              height={'16'}
                        />
                    </S.MainBtn>
                </S.TextWrap>

               <S.Image src={photo} alt="avatar"/>

            </S.Main>
        </Container>
    );
};


