import React from "react"
import {nanoid} from 'nanoid'


function Key (props) {
    return (
        <button className="keyboard--key" onClick={() => props.addLetter(props.char)}>
            {props.char}
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
    const letterRows = ["qwertyuiop","asdfgjkl","zxcvbnm"]
    //console.log(props)
    return (
        <div className="keyboard">
            {[...letterRows].map((row) => <KeyboardRow letters={row} key={nanoid()} addLetter={props.addLetter}/>)}
        </div>
    )
    }