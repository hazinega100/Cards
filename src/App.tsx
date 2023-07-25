import React from "react";
import "./App.css";
import {Cards} from "./components/Cards";
import {useSelector} from "react-redux";
import {RootState} from "./state/store";
import {InitStateType} from "./state/reducer";
import {EditableSpan} from "./components/EditableSpan";

function App() {
    const data = useSelector<RootState, InitStateType>(state => state.reducer)

    console.log("App render")

    return (
        <div className="App">
            {/*{(data.status === "success") && <div className={"success"}><h2>congratulations page loaded</h2></div>}*/}
            <div>
                <EditableSpan value={data.title}/>
                <h3>{data.description}</h3>
            </div>
            <Cards data={data} />
        </div>
    );
}

export default App;
