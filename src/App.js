import React from "react"
import Die from './Grid'
import {nanoid} from 'nanoid'
import Confetti from "react-confetti"
import Keyboard from "./Keyboard"
import Grid from "./Grid"

export default function App() {

    const square = {letter: '', color:'white'}
    const row = {squares: [], letters: '', squareNum: 5, player:false};
    const rowLetters = ['cdcdcdcd','cdcdcdcd','cdcdcdcd','cdcdcdcd','cdcdcdcd','cdcdcdcd']
    const grid = {rows: [], rowLetters: rowLetters}


    for(let i = 0; i < row.squareNum; i++) {
        row.squares.push(square);
    }

    for (let i = 0; i < 6; i++) {
        grid.rows.push(row);
    }

    return (
        <main>
            <h1> Wordle </h1>
            <p> Guess the 5 letter word. Only english words can be submitted. Letters in the right spot are green. Letters in the word are yellow.</p>
            <div className="grid">
                {<Grid grid={grid}/>}
            </div>
            <Keyboard />
        </main>
    )
}