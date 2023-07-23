import React from "react";
import s from "./Cards.module.css"
import {CardsType, deleteCardAC, setCardsAC} from "../state/reducer";
import axios from "axios";
import {useDispatch} from "react-redux";
import {Card} from "./Card";

type CardPropsType = {
    data: CardsType[]
}

export const Cards = ({data}: CardPropsType) => {
    const dispatch = useDispatch()
    axios("https://jsonplaceholder.typicode.com/photos")
        .then(res => res.data)
        .then((data) => {
            dispatch(setCardsAC(data))
        })
    if (!data.length) {
        return <h3>Cards not found</h3>
    }
    const deleteCard = (id: number) => {
        dispatch(deleteCardAC(id))
    }
    return (
        <div className={s.wrapper}>
            {data.map(i => {
                return <Card key={i.id}
                             id={i.id}
                             title={i.title}
                             url={i.url}
                             callBack={deleteCard}
                />
            })}
        </div>
    );
};