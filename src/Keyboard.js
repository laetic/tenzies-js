import React from "react"
import {nanoid} from 'nanoid'


function Key (props) {
    const backspace = props.char === "!";
    const submit = props.char ==="@";
    const styles = backspace || submit ? "material-icons" : "";

    return (
        <button className={`keyboard--key ${styles}`} onClick={() => props.addLetter(props.char)}>
            <h4 className = {styles}>
                {backspace ? "arrow_back" : 
                submit ? "check" :
                    props.char}
                </h4>
        </button>
    )
}

function KeyboardRow (props) {
    return (
        <div className="keyboard--row">
            {[...props.letters].map((letter) => <Key char={letter} key={nanoid()} addLetter={props.addLetter}/>)}
        </div>
    )
}

export default function Keyboard (props) {
    const letterRows = ["qwertyuiop","asdfgjkl","!zxcvbnm@"]
    //console.log(props)
    return (
        <div className="keyboard">
            {[...letterRows].map((row) => <KeyboardRow letters={row} key={nanoid()} addLetter={props.addLetter}/>)}
        </div>
    )
    }