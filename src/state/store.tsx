import { legacy_createStore, combineReducers, Store } from "redux";
import {InitStateType, reducer} from "./reducer";

export interface RootState {
    reducer: InitStateType;
}
export const rootReducer = combineReducers<RootState>({
        reducer: reducer
    })

const store: Store<RootState> = legacy_createStore(rootReducer)

export default store