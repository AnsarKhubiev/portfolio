import React from 'react';
import {S} from '../AsideProfile_Styles'

export const ProfileInfoCard: React.FC = () => {
    return (
        <S.ProfileInfoBlock>
            <S.CardContainer>
                <tr>
                    <th><S.TableHeader>Age:</S.TableHeader></th>
                    <td>24</td>
                </tr>
                <tr>
                    <th><S.TableHeader>Residence:</S.TableHeader></th>
                    <td>BD</td>
                </tr>
                <tr>
                    <th><S.TableHeader>Freelance:</S.TableHeader></th>
                    <td>Available</td>
                </tr>
                <tr>
                    <th><S.TableHeader>Address:</S.TableHeader></th>
                    <td>Dhaka,Bangladesh</td>
                </tr>
            </S.CardContainer>
        </S.ProfileInfoBlock>
    );
};


