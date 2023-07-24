import React, {ChangeEvent, useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import {useDispatch} from "react-redux";
import {editTitleAC} from "../state/reducer";

type EditableSpanPropsType = {
    value: string
}

export const EditableSpan = ({value}: EditableSpanPropsType) => {
    const [edit, setEdit] = useState(false)
    const [localStorageValue, setLocalStorageValue] = useState(value);
    const dispatch = useDispatch()
    useEffect(() => {
        const storedValue = localStorage.getItem("newTitle")
        if (storedValue) {
            setLocalStorageValue(storedValue)
        }
    },[])
    const activeEditMode = () => {
        setEdit(true)
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const event = e.currentTarget.value
        dispatch(editTitleAC(event))
        return localStorage.setItem("newTitle", event)
    }
    const activeViewMode = () => {
        setEdit(false)
    }
    return (
        <div>
            {edit
                ? <TextField value={localStorageValue}
                             onChange={onChangeHandler}
                             onBlur={activeViewMode}
                             size="small"
                             autoFocus
                />
                : <h1 onDoubleClick={activeEditMode}>{localStorageValue}</h1>
            }
        </div>
    );
};