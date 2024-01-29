import {theme} from "../../styles/theme";
import styled from "styled-components";
import {TextFieldPropsType} from "./FieldWrap";
import {font} from "../../styles/Common";


const FieldWrap = styled.div`
  position: relative;
`

const Label = styled.label`
  ${font({weight: 500, lineHeight: 1.236, Fmax: 18, Fmin: 18})};
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.2s;
  cursor: text;
`

const Field = styled.input.attrs((props: TextFieldPropsType) => ({
    type: props.type || 'text',
    as: props.as || undefined,
}))`
  ${font({color: theme.colors.paragraphFont, weight: 500, lineHeight: 1.236, Fmax: 16, Fmin: 16})};
  height: ${props => props.as === 'textarea' ? '210px' : '50px'};
  background-color: ${theme.colors.background};
  width: 100%;
  border: none;
  padding: 7px 15px;
  resize: none;

  ::placeholder {
    opacity: 0;
  }

  :focus-visible {
    outline: 1px solid${theme.colors.paragraphFont};
  }

  :focus + label,
  :not(:placeholder-shown) + label {
    top: -15px;
    font-size: 0.8rem;
  }
`


export const S = {
    FieldWrap,
    Label,
    Field
}