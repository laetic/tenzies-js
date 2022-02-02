import React from "react"

export default function Keyboard () {
    const letters = "qwertyuiopasdfgjklzxcvbnm"
    function Key (props) {
        return (
            <button className="keyboard--key">
                {props.char}
            </button>
        )
    }

    return (
        <div className="keyboard">
            {[...letters].map((letter) => <Key char={letter}/>)}
        </div>
    )
    }