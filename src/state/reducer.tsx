import React from 'react';

export type CardsType = {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}

export type StatusType = "idle" | "loading" | "success" | "error"

export type InitStateType = {
    cards: CardsType[]
    status: string
    error: null
}

type SetCardsACType = ReturnType<typeof setCardsAC>
type DeleteCardACType = ReturnType<typeof deleteCardAC>
type ChangeStatusACType = ReturnType<typeof changeStatusAC>
type ErrorStatusACType = ReturnType<typeof errorStatusAC>

type ActionType = SetCardsACType | DeleteCardACType | ChangeStatusACType | ErrorStatusACType

const initState: InitStateType = {
    cards: [],
    status: "idle",
    error: null
}

export const reducer = (state = initState, action: ActionType): InitStateType => {
    switch (action.type) {
        case "INIT_CARDS": {
            return {
                ...state,
                cards: action.payload
            }
        }
        case "DELETE_CARD": {
            return {
                ...state,
                cards: state.cards.filter(el => el.id !== action.payload)
            }
        }
        case "CHANGED_STATUS": {
            return {
                ...state,
                status: action.payload
            }
        }
        case "ERROR_STATUS": {
            return {
                ...state,
                error: action.payload
            }
        }
        default: {
            return state
        }
    }
};

export const setCardsAC = (cards: CardsType[]) => {
    return {
        type: "INIT_CARDS",
        payload: cards
    } as const
}

export const deleteCardAC = (id: number) => {
    return {
        type: "DELETE_CARD",
        payload: id
    } as const
}

export const changeStatusAC = (status: StatusType) => {
    return {
        type: "CHANGED_STATUS",
        payload: status
    } as const
}

export const errorStatusAC = (error: any) => {
    return {
        type: "ERROR_STATUS",
        payload: error
    } as const
}