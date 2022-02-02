import React from "react"
import Die from './Grid'
import {nanoid} from 'nanoid'
import Confetti from "react-confetti"
import Keyboard from "./Keyboard"
import Grid from "./Grid"
import { fireEvent } from "@testing-library/react"

export default function App() {

    const square = {letter: '', color:'white'}
    const row = {squares: [], letters: '', squareNum: 5, player:false};
    const [grid, setGrid] = React.useState({rows: [], rowLetters: ['abcde','cdcdcdcd','cdcdcdcd','cdcdcdcd','cdcdcdcd','cdcdcdcd']})

    for(let i = 0; i < row.squareNum; i++) {
        row.squares.push({...square});
    }

    for (let i = 0; i < 6; i++) {
        grid.rows.push({...row});
        if(i == 0) 
            grid.rows[i].player = true;
    }

    console.log(grid)
        

    function setLetter(letter) {
        for (let i = 0; i < grid.rows.length; i++ ) {
            if (grid.rows[i]) {
                setGrid((prevGrid) => {
                    return {...prevGrid, 
                    rowLetters: prevGrid.rowLetters.map(
                        (row) => row.player ? 
                        row.push(letter) : 
                        row)}})
            }
        }
    }

    function removeLetter(letter) {
        for (let i = 0; i < grid.rows.length; i++ ) {
            if (grid.rows[i]) {
                setGrid((prevGrid) => {
                    return {...prevGrid, 
                    rowLetters: prevGrid.rowLetters.map(
                        (row) => row.player ? 
                        row.push(letter) : 
                        row)}})
            }
        }
    }



    return (
        <main>
            <h1> Wordle </h1>
            <p> Guess the 5 letter word. Only english words can be submitted. Letters in the right spot are green. Letters in the word are yellow.</p>
            <div className="grid">
                {<Grid grid={grid}/>}
            </div>
            <Keyboard setLetter={setLetter}/>
        </main>
    )
}