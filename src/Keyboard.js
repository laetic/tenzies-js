import React from "react"
import {nanoid} from 'nanoid'

export default function Keyboard () {
    const letterRows = ["qwertyuiop","asdfgjkl","zxcvbnm"]

    function Key (props) {
        return (
            <button className="keyboard--key">
                a
            </button>
        )
    }

    function KeyboardRow (props) {
        return (
            <div className="keyboard--row">
                {[...props.letters].map((letter) => <Key char={letter} key={nanoid()}/>)}
            </div>
        )
    }

    return (
        <div className="keyboard">
            {[...letterRows].map((row) => <KeyboardRow letters={row} key={nanoid()}/>)}
        </div>
    )
    }