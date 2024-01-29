import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {S} from '../Blog_Styles'

type PostCardPropsType = {
    postCardInfo: {
        link: string,
        imgSrc: string,
        imgAlt: string,
        title: string,
        cardText: string
    }
}

export const PostCard:React.FC<PostCardPropsType> = (props: PostCardPropsType) => {
    return (
        <S.PostCard>

            <img src={props.postCardInfo.imgSrc} alt={props.postCardInfo.imgAlt}/>

            <S.CardDescription>
                <S.Title>{props.postCardInfo.title}</S.Title>
                <S.Text>{props.postCardInfo.cardText}</S.Text>

                <S.Link href={''}>
                    Learn more
                    <Icon iconId={'GreaterThanSign'}
                          width={'20'}
                          height={'20'}
                          viewBox={'0 0 20 20'}
                    />
                </S.Link>
            </S.CardDescription>

        </S.PostCard>
    );
};

