import React from "react"
import {nanoid} from 'nanoid'


function Key (props) {
    const backspace = props.char === "!";
    const submit = props.char ==="@";
    const useIcon = backspace || submit ? "material-icons" : "";
    const callback = backspace ? 
        () => props.removeLetter() : 
        submit ? 
        () => props.submit() :
        () => props.addLetter(props.char)

    return (
        <button className="keyboard--key" onClick={callback}>
            <h4 className = {useIcon}>
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
            {[...props.letters].map((letter) => 
            <Key 
            char={letter} 
            key={nanoid()} 
            addLetter={props.addLetter} 
            removeLetter={props.removeLetter} 
            submit={props.submit} />)}
        </div>
    )
}

export default function Keyboard (props) {
    const letterRows = ["qwertyuiop","asdfgjkl","!zxcvbnm@"]
    //console.log(props)
    return (
        <div className="keyboard">
            {[...letterRows].map((row) => 
            <KeyboardRow 
            letters={row} 
            key={nanoid()} 
            addLetter={props.addLetter} 
            removeLetter={props.removeLetter} 
            submit={props.submit}/>)}
        </div>
    )
    }