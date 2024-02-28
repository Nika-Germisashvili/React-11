import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import Listitem from "./Listitem";

class App extends React.Component {
    render() {
        let fruits = ["apple", "banana", "orange", "grape", "kiwi"];

        return (
            <Fragment>          
                <Listitem arr={ fruits }></Listitem>       
            </Fragment>
        )
    }
}

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App></App>);