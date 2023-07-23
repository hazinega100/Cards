import React from "react";
import s from "./Card.module.css"
import {CardsType, setCardsAC} from "./state/reducer";
import axios from "axios";
import {useDispatch} from "react-redux";

type CardPropsType = {
    data: CardsType[]
}

export const Card = ({data}: CardPropsType) => {
    const dispatch = useDispatch()
    axios("https://jsonplaceholder.typicode.com/photos")
        .then(res => res.data)
        .then((data) => {
            dispatch(setCardsAC(data))
        })
    if (!data.length) {
        return <h3>Cards not found</h3>
    }
    return (
        <div className={s.wrapper}>
            {data.map(card => {
                return (
                    <div key={card.id} className={s.card}>
                        <img className={s.img}
                             src={card.url}
                             alt="card"
                        />
                        <div className={s.title}>{card.title}</div>
                    </div>
                )
            })}
        </div>
    );
};