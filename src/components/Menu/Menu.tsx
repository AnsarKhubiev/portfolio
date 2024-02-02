import React from 'react';
import {Icon} from "../icon/Icon";
import {S} from './Menu_Styles'


const navItems = [
    {title: 'Home', iconId: 'home', href: 'home'},
    {title: 'My services', iconId: 'fileCode', href: 'services'},
    {title: 'CV', iconId: 'cv', href: 'cv'},
    {title: 'Portfolio', iconId: 'portfolio', href: 'portfolio'},
    {title: 'Blog', iconId: 'blog', href: 'blog'},
    {title: 'Contact', iconId: 'contact', href: 'contact'}
]


export const Menu: React.FC<{isMobileMenu?: boolean}> = (props: {isMobileMenu?: boolean}) => {
    return (

        <S.Menu role={'menu'} tabIndex={0}>
            {navItems.map((item, index) => (
                <li role={"menuitem"} key={index}>
                    <S.NavLink
                        activeClass="active"
                        to={item.href}
                        smooth={true}
                        spy={true}
                    >
                        <Icon iconId={item.iconId}/>
                        {props.isMobileMenu && item.title}
                    </S.NavLink>
                </li>
            ))}

        </S.Menu>
    );
};



