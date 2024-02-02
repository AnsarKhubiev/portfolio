import React from 'react';
import {S} from '../AsideCv_Styles'

export const CvInfoCard: React.FC = () => {
    return (
        <S.CvInfoBlock>
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
        </S.CvInfoBlock>
    );
};


