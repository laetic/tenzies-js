import React from "react"
import Die from './Grid'
import {nanoid} from 'nanoid'
import Confetti from "react-confetti"
import Keyboard from "./Keyboard"
import Grid from "./Grid"
import { fireEvent } from "@testing-library/react"

export default function App() {
    const [rows, setRows] = React.useState (initRows) ;

    function initRows () {
        const rows = []
        for (let i = 0; i < 6; i++) {
            rows.push({squares: initSquares(), letters: '', squareNum: 5, player:false});
            if(i == 0) 
                rows[i].player = true;
        }
        return rows;
    }

    function initSquares () {
        const squares = []
        for(let i = 0; i < 5; i++) {
            squares.push({letter: '', color:'white'});
        }
        return squares;
    }
        

    function addLetter(letter) {
        setRows( (prevRows) => {
            const pushRow = prevRows.filter( (row) => row.player)[0]
            if (pushRow.letters.length < 5)
                pushRow.letters = pushRow.letters.concat(letter);
            return prevRows.map( (row) => row.player ? pushRow : row);
        })
    }

    function removeLetter(letter) {
        setRows( (prevRows) => {
            const pushRow = prevRows.filter( (row) => row.player)[0]
            pushRow.letters = pushRow.letters.slice(0,-1);
            return prevRows.map( (row) => row.player ? pushRow : row);
        })
    }

    function submit() {
        console.log("in submit func")
        // setRows( (prevRows) => {
        //     const pushRow = prevRows.filter( (row) => row.player)[0]
        //     pushRow.letters = pushRow.letters.slice(0,-1);
        //     return prevRows.map( (row) => row.player ? pushRow : row);
        // })
    }


    //console.log(rows)
    return (
        <main>
            <h1> Wordle </h1>
            <p> Guess the 5 letter word. Only english words can be submitted. Letters in the right spot are green. Letters in the word are yellow.</p>
            <div className="grid">
                {<Grid rows={rows}/>}
            </div>
            <Keyboard addLetter={addLetter} removeLetter={removeLetter} submit={submit}/>
        </main>
    )
}