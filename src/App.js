import React from "react"
import Die from './Grid'
import {nanoid} from 'nanoid'
import Confetti from "react-confetti"
import Keyboard from "./Keyboard"
import Grid from "./Grid"
import { fireEvent } from "@testing-library/react"
import dictionary from './dictionary'


export default function App() {
    const [rows, setRows] = React.useState (() => initRows()) ;
    const word = "fjord"
    const [styles, setStyles] = React.useState (() => ["white","white","white","white","white" ])
    const [playerIndex, setPlayerIndex] = React.useState(() => 4);
    const [validSubmit, setValidSubmit] = React.useState(() => false);
    const [wordle, setWordle] = React.useState(() => false);
    const [endOfGame, setEndOfGame] = React.useState(() => false);

    React.useEffect( () => {
        //console.log(rows)
        setRows( (prevRows) => {
            const playerRow = prevRows[playerIndex]
            console.log(playerRow)
            playerRow.squares = playerRow.squares.map((item, index) => ({...item, color: styles[index]}))
            return prevRows.map( (row) => row.player ? playerRow : row);
        })
        if (validSubmit) {
            nextRow();
            setValidSubmit(false);
            console.log("in submit" + playerIndex)
            if(playerIndex === rows.length) {
                console.log("in valid submit" + playerIndex)
                setEndOfGame(true);
            }
        }
    }, [styles])

    React.useEffect( () => {
        console.log("in wordle check " + playerIndex)
        if(playerIndex === rows.length - 1 && validSubmit) {
            console.log("in last row")
            setEndOfGame(true);
        }

        if(rows[playerIndex].letters == word) {
            setWordle(true);
            setEndOfGame(true);
        }

    }, [validSubmit])

    function initRows () {
        const rows = []
        for (let i = 0; i < 6; i++) {
            rows.push({squares: initSquares(), letters: '', squareNum: 5});
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
        if(wordle) return;

        setRows( (prevRows) => {
            const pushRow = rows[playerIndex]
            if (pushRow.letters.length < 5)
                pushRow.letters = pushRow.letters.concat(letter);
            return prevRows.map( (row) => row.player ? pushRow : row);
        })
    }

    function removeLetter() {
        if (wordle) return;

        setRows( (prevRows) => {
            const pushRow = rows[playerIndex]
            pushRow.letters = pushRow.letters.slice(0,-1);
            return prevRows.map( (row) => row.player ? pushRow : row);
        })
    }

    function submit() {
        const playerRow = rows[playerIndex]

        let colors = []
        if (playerRow.letters.length != 5 || !(inDictionary(playerRow.letters))) {
            colors = playerRow.squares.map(() => "red")
            setValidSubmit(false);
        } else {
            colors = [...playerRow.letters].map((playerLetter, index) => 
                playerLetter === word[index] ? "green" : 
                [...word].some( (wordLetter) => wordLetter === playerLetter) ? "yellow" : 
                "grey"
                )
            setValidSubmit(true);
        }
        setStyles(colors)
    }

    function resetGame() {
        setWordle(false);
        setRows(initRows)
        setPlayerIndex(0);
        setEndOfGame(false);
    }

    function inDictionary(lookup) {
        //console.log("in dictionary")
        return dictionary.some((word) => word === lookup);
    }

    function nextRow() {
        if(playerIndex < rows.length - 1)
            setPlayerIndex(playerIndex + 1);
    }

    return (
        <main>
            <h1> Wordle </h1>
            {endOfGame && 
                <div className="reset">
                    {wordle ? <p>Wordle!<Confetti /></p> : <p> Try again </p>}
                    <button className="reset--button" onClick={resetGame}> Retry </button>
                </div>
            }
            {!wordle && 
            <p> Guess the 5 letter word. Only english words can be guessed. Letters in the right spot are green. Letters in the word are yellow.</p>}
            <div className="grid">
                {<Grid rows={rows}/>}
            </div>
            <Keyboard addLetter={addLetter} removeLetter={removeLetter} submit={submit}/>
        </main>
    )
}