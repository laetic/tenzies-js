import React from "react"

export default function Die(props) {
    return (
        <button className={`die ${props.isHeld ? "die--held" : ""}`} onClick={() => {props.holdDie(props.id)}}>
            <h1>{props.value}</h1>
        </button>
    )
}