import React, {useCallback, useEffect} from "react";
import s from "./Cards.module.css"
import {changeStatusAC, deleteCardAC, errorStatusAC, InitStateType, setCardsAC} from "../state/reducer";
import axios from "axios";
import {useDispatch} from "react-redux";
import {Card} from "./Card";
import error from "../404.svg"
import loading from "../Settings.gif"

type CardPropsType = {
    data: InitStateType
}

export const Cards = React.memo(({data}: CardPropsType) => {

    console.log("Cards render")

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(changeStatusAC("loading"))
        axios("https://jsonplaceholder.typicode.com/photos")
            .then(res => res.data)
            .then((data) => {
                dispatch(changeStatusAC("success"))
                dispatch(setCardsAC(data))
                setTimeout(() => {dispatch(changeStatusAC("idle"))}, 1000)
            })
            .catch(error => {
                dispatch(changeStatusAC("error"))
                dispatch(errorStatusAC(error))
            })
        // .finally(() => dispatch(changeStatusAC("idle")))
    }, [])
    const deleteCard = useCallback((id: number) => {
        dispatch(deleteCardAC(id))
    }, [])
    return (
        <>
            {(data.status === "loading") && <div className={s.loading}><img src={loading} alt="loading"/></div>}
            {(data.status === "error") && <div className={s.error}><img src={error} alt="404"/></div>}
            <div className={s.wrapper}>
                {data.cards.map(i => {
                    return <Card key={i.id}
                                 id={i.id}
                                 title={i.title}
                                 url={i.thumbnailUrl}
                                 callBack={deleteCard}
                    />
                })}
            </div>
        </>
    );
})