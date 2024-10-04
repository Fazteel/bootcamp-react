import React from "react";
import ReactDOM from "react-dom/client";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

function App(props) {
    return (
        <div>
            <h1>Halo nama saya { props.name }</h1>
            <h1>dan pekerjaan saya { props.job }</h1>
        </div>
    )
}

function Data() {
    return (
        <div>
            <App name="Fahmi Andika Setiono" job="Fullstack Developer" />
        </div>
    )
}

export default Data;