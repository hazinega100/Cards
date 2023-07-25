import React, {useCallback} from 'react';
import s from "./Card.module.css";
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

type CardPropsType = {
    id: number
    url: string
    title: string
    callBack: (id: number) => void
}

export const Card = React.memo(({id, url, title, callBack}: CardPropsType) => {

    console.log("CARD render")

    const onClickHandler = useCallback(() => {
        callBack(id)
    }, [id])
    return (
        <div key={id} className={s.card}>
            <div className={s.card_panel}>
                <Checkbox />
                <IconButton onClick={onClickHandler} aria-label="delete" size="small">
                    <DeleteIcon fontSize="inherit"/>
                </IconButton>
            </div>
            <div>
                <img className={s.img}
                     src={url}
                     alt="card"
                />
            </div>
            <div className={s.title}>{title}</div>
        </div>
    )
})