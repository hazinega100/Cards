import React from "react";
import "./App.css";
import {Cards} from "./components/Cards";
import {useSelector} from "react-redux";
import {RootState} from "./state/store";
import {InitStateType} from "./state/reducer";

function App() {
    const data = useSelector<RootState, InitStateType>(state => state.reducer)
    return (
        <div className="App">
            <Cards data={data}/>
        </div>
    );
}

export default App;
