import { legacy_createStore, combineReducers, Store } from "redux";
import {CardsType, reducer} from "./reducer";

export interface RootState {
    reducer: CardsType[];
}
export const rootReducer = combineReducers<RootState>({
        reducer: reducer
    })

const store: Store<RootState> = legacy_createStore(rootReducer)

export default store