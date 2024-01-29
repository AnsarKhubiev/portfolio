import React from 'react';
import iconsSprite from '../../assets/images/icons-sprite.svg'

export type IconPropsType = {
    iconId?: string,
    width?: string,
    height?: string,
    viewBox?: string,
    color?: string
}

export const Icon = (props: IconPropsType) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
                    width={props.width || '18'}
                    height={props.height || '18'}
                    viewBox={props.viewBox || '0 0 18 18'}
                    fill={props.color || 'currentColor'}
        >
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
    );
};