import {theme} from "./theme";


type fontPropsType = {
    family?: string,
    weight?: number,
    color?: string,
    lineHeight?: number,
    Fmin?: number,
    Fmax?: number,
    textTransform?: string
}

export const font = ({family, weight, color, lineHeight, Fmin, Fmax, textTransform} : fontPropsType)=>`
font-family: ${family || 'Inter, sans-serif'}; 
font-weight: ${weight || 400}; 
color: ${color || theme.colors.paragraphFont}; 
line-height: ${lineHeight || 1.2}; 
font-size: calc( (100vw - 375px) / (1440 - 375) * (${Fmax} - ${Fmin}) + ${Fmin}px);
text-transform: ${textTransform || 'none'}
`
