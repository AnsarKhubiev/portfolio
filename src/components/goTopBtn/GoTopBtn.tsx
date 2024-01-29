import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {theme} from "../../styles/theme";
import {animateScroll as scroll} from 'react-scroll';

export const GoTopBtn = () => {

    const [showBtn, setshowBtn] = useState (false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                setshowBtn(true)
            } else {
                setshowBtn(false)
            }
        })
    }, []);

    return (

        <>
            {showBtn && (
                <StyledGoTopBtn onClick={() => {
                    scroll.scrollToTop()
                }}>
                    <Icon
                        iconId={'topArrow'}
                        height={'15'}
                        width={'16'}
                        viewBox={'0 0 15 16'}
                        color={theme.colors.paragraphFont}
                    />
                </StyledGoTopBtn>
            )
            }
        </>

    );
};

const StyledGoTopBtn = styled.button`
  display: none;
  background-color: ${theme.colors.background};
  width: 40px;
  height: 40px;
  border-radius: 20px;
  position: fixed;
  bottom: 20px;
  right: 22px;
  
  :hover {
    background-color: ${theme.colors.yellow};
    svg {
      fill: ${theme.colors.black};
    }
  }
  
  @media ${theme.media.middle} {
    display: block;
  }
`