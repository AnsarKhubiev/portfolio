import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";

export const DarkModeBtn = () => {
    return (
        <StyledDarkModeBtn aria-label={'Переключатель темной темы'}>
            <Icon
                iconId={'darkMode'}
                viewBox={'0 0 30 30'}
                height={'30'}
                width={'30'}
            />
        </StyledDarkModeBtn>
    );
};

const StyledDarkModeBtn = styled.button`
`