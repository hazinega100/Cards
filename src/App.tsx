import React from "react";
import "./App.css";
import {Cards} from "./components/Cards";
import {useSelector} from "react-redux";
import {RootState} from "./state/store";
import {InitStateType} from "./state/reducer";
import {EditableSpan} from "./components/EditableSpan";

function App() {
    const data = useSelector<RootState, InitStateType>(state => state.reducer)
    return (
        <div className="App">
            <div>
                <EditableSpan value={data.title} />
                <h3>{data.description}</h3>
            </div>
            <Cards data={data} />
        </div>
    );
}

export default App;
