import React from "react"
import Die from './Grid'
import {nanoid} from 'nanoid'
import Confetti from "react-confetti"
import Keyboard from "./Keyboard"
import Grid from "./Grid"
import { fireEvent } from "@testing-library/react"
import raw from './dictionary.txt'


export default function App() {
    const [rows, setRows] = React.useState (initRows) ;
    const word = "fjord"
    const [styles, setStyles] = React.useState (["white","white","white","white","white" ])
    const [playerIndex, setPlayerRow] = React.useState(0);
    const [validSubmit, setValidSubmit] = React.useState(false);
    //const dictionary = getDictionary();

    React.useEffect( () => {
        console.log(rows)
        setRows( (prevRows) => {
            const playerRow = prevRows[playerIndex]
            console.log(playerRow)
            playerRow.squares = playerRow.squares.map((item, index) => ({...item, color: styles[index]}))
            return prevRows.map( (row) => row.player ? playerRow : row);
        })
        if (validSubmit)
            nextRow();
    }, [styles])

    function initRows () {
        const rows = []
        for (let i = 0; i < 6; i++) {
            rows.push({squares: initSquares(), letters: '', squareNum: 5});
            // if(i == 0) 
            //     rows[i].player = true;
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
        
    function getDictionary() {
        let result = ['test']
        fetch(raw)
            .then(response => response.text())
            .then(text => {
                console.log(text.split(/\n/))
                result = [...text.split(/\n/)]
                return [...text.split(/\n/)]
            })
        console.log('after fetch')
        console.log(result)
        return result
            // outputs the content of the text file
    }

    function addLetter(letter) {
        setRows( (prevRows) => {
            const pushRow = rows[playerIndex]
            if (pushRow.letters.length < 5)
                pushRow.letters = pushRow.letters.concat(letter);
            return prevRows.map( (row) => row.player ? pushRow : row);
        })
    }

    function removeLetter(letter) {
        setRows( (prevRows) => {
            const pushRow = rows[playerIndex]
            pushRow.letters = pushRow.letters.slice(0,-1);
            return prevRows.map( (row) => row.player ? pushRow : row);
        })
    }

    function submit() {
        const playerRow = rows[playerIndex]
        // const colors = [...word].map((letter, index) => 
        //     letter === playerRow.letters[index] ? "green" : 
        //     [...playerRow.letters].some( (playerLetter) => playerLetter === letter) ? "yellow" : 
        //     "white"
        //     )
        let colors = []
        if (playerRow.letters.length != 5 || !(inDictionary(playerRow.letters))) {
            colors = playerRow.squares.map(() => "red")
            setValidSubmit(false);
        } else {
            colors = [...playerRow.letters].map((playerLetter, index) => 
                playerLetter === word[index] ? "green" : 
                [...word].some( (wordLetter) => wordLetter === playerLetter) ? "yellow" : 
                "white"
                )
            setValidSubmit(true);
        }
        setStyles(colors)
    }

    function inDictionary(word) {
        console.log("in dictionary")
        //console.log(dictionary)
        return true;
    }

    function nextRow() {
        setPlayerRow(playerIndex + 1);
        // setRows( (prevRows) => {
        //     console.log(prevRows)
        //     //const prevRows = prevRows;
        //     if (prevRows.every((row) => !row.player)) {
        //         prevRows[0].player = true;
        //         return prevRows;
        //     }

        //     for( let i = prevRows.length - 1; i >= 0 ; i--) {
        //         if (prevRows[i].player) {
        //             prevRows[i + 1].player = true;
        //             prevRows[i].player = false;
        //         }
        //     }
        //     return prevRows;
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