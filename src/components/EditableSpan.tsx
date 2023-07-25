import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import {useDispatch} from "react-redux";
import {editTitleAC} from "../state/reducer";

type EditableSpanPropsType = {
    value: string
}

export const EditableSpan = React.memo(({value}: EditableSpanPropsType) => {

    console.log("EditableSpan render")

    const [editMode, setEditMode] = useState<boolean>(false)
    const [localStorageValue, setLocalStorageValue] = useState<string>(value);
    const dispatch = useDispatch()
    useEffect(() => {
        const test = localStorage.getItem("newTitle")
        if (test) {
            setLocalStorageValue(test)
        }
    }, [])
    const activeEditMode = useCallback(() => {
        setEditMode(true)
    }, [editMode])
    const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const event = e.currentTarget.value
        setLocalStorageValue(event)
        dispatch(editTitleAC(event))
        localStorage.setItem("newTitle", event)
    }, [])
    const activeViewMode = useCallback(() => {
        setEditMode(false)
    }, [editMode])
    return (
        <div>
            {editMode
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
})