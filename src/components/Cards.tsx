import React, {useCallback, useEffect, useState} from "react";
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

    const [pages, setPages] = useState(1)
    const [totalCount, setTotalCount] = useState(0)
    const [fetching, setFetching] = useState(true)
    const dispatch = useDispatch()
    useEffect(() => {
        if (fetching) {
            console.log('fetching')
            dispatch(changeStatusAC("loading"))
            axios(`https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${pages}`)
                .then(res => {
                    setTotalCount(res.headers["x-total-count"])
                    return res.data
                })
                .then((data) => {
                    dispatch(changeStatusAC("success"))
                    dispatch(setCardsAC(data))
                    setPages(prevState => prevState + 1)
                })
                .catch(error => {
                    dispatch(changeStatusAC("error"))
                    dispatch(errorStatusAC(error))
                })
                .finally(() => setFetching(false))
        }
    }, [fetching])
    const deleteCard = useCallback((id: number) => {
        dispatch(deleteCardAC(id))
    }, [])
    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])
    const scrollHandler = useCallback((e: Event) => {
        // @ts-ignore
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100
        && data.cards.length === totalCount) {
            setFetching(true)
        }
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