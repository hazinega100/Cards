import React from 'react';
import s from "./Card.module.css";

type CardPropsType = {
    id: number
    url: string
    title: string
    callBack: (id: number) => void
}

export const Card = ({id, url, title, callBack}: CardPropsType) => {
    const onClickHandler = () => {
        callBack(id)
    }
    return (
        <div key={id} className={s.card}>
            <button onClick={onClickHandler}>x</button>
            <img className={s.img}
                 src={url}
                 alt="card"
            />
            <div className={s.title}>{title}</div>
        </div>
    )
};