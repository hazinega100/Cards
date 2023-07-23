import React from "react";
import "./App.css";
import {Cards} from "./components/Cards";
import {useSelector} from "react-redux";
import {RootState} from "./state/store";
import {CardsType} from "./state/reducer";

function App() {
    const cards = useSelector<RootState, CardsType[]>(state => state.reducer)
    return (
        <div className="App">
            <Cards data={cards}/>
        </div>
    );
}

export default App;
