import React, {useState} from "react";
import "./App.css";
import {Cards} from "./components/Cards";
import {useSelector} from "react-redux";
import {RootState} from "./state/store";
import {InitStateType} from "./state/reducer";

function App() {
    const data = useSelector<RootState, InitStateType>(state => state.reducer)
    const [title, setTitle] = useState("The Best Shop")
    return (
        <div className="App">
            <h1>{title}</h1>
            <Cards data={data}/>
        </div>
    );
}

export default App;
