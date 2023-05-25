import React from "react"
import ReactDOM from "react-dom"
import App from "./App.jsx"

export default function Main() {
    return (
        <div>
            <App />
        </div>
    )
}

ReactDOM.render(<Main />, document.querySelector("#root"))