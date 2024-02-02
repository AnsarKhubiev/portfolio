import React, {useState} from 'react';
import {S} from './MobileCv_Styles';
import {Icon} from "../icon/Icon";
import {AsideCv} from "../../layout/asides/asideCv/AsideCv";

export const MobileCv: React.FC = () => {
    const [CvIsOpen, setSvIsOpen] = useState(false);
    const CvBtnClick = () => {setSvIsOpen(!CvIsOpen)}

    return (
        <S.MobileCv isOpen={CvIsOpen}>

            <S.CvPopup isOpen={CvIsOpen} onClick={() => {setSvIsOpen(false)}}>
                <AsideCv/>
            </S.CvPopup>

            <S.CvBtn isOpen={CvIsOpen} onClick={CvBtnClick}>
                <Icon iconId={'profile'}/>
            </S.CvBtn>

        </S.MobileCv>
    );
};