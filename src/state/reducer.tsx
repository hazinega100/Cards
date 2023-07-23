import React from 'react';

export type CardsType = {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}
type SetCardsACType = ReturnType<typeof setCardsAC>
type ActionType = SetCardsACType

const initState: CardsType[] = []

export const reducer = (state = initState, action: ActionType): CardsType[] => {
    switch (action.type) {
        case "INIT_CARDS": {
            return state = action.payload
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