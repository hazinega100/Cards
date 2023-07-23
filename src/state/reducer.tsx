import React from 'react';

export type CardsType = {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}
type SetCardsACType = ReturnType<typeof setCardsAC>
type DeleteCardACType = ReturnType<typeof deleteCardAC>

type ActionType = SetCardsACType | DeleteCardACType

const initState: CardsType[] = []

export const reducer = (state = initState, action: ActionType): CardsType[] => {
    switch (action.type) {
        case "INIT_CARDS": {
            return state = action.payload
        }
        case "DELETE_CARD": {
            return state.filter(el => el.id !== action.payload)
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