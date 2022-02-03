import React from "react"
import {nanoid} from 'nanoid'


function Square(props) {
    const {color} = props.square;
    let finalColor = "";
    if (color == "green") {
        finalColor = "#7ef47c"
    } else if (color =="yellow") {
        finalColor = "#f7f580"
    } else if (color =="red") {
        finalColor = "#f78082"
    } else {
        finalColor = "white"
    }
    const styles = {
        backgroundColor: finalColor
    }
    //console.log(styles)
    return (
        
        <div className="grid--square" style={styles}>
            <h1>{props.square.letter.toUpperCase()}</h1>
        </div>
    )
}

function Row(props) {
    const squareElements = []
    for (let i = 0; i < props.row.squareNum; i++) {
        //console.log(props)
        const letter = props.row.letters[i] ? props.row.letters[i] : ''
        let square = {...props.row.squares[i], letter: letter}
        squareElements.push(<Square square={square} key={nanoid()}/>)
    }

    return (
        <div className="grid--row">
            {squareElements }
        </div>
    )
}

export default function Grid(props) {
    const rowElements = []
    //console.log("in grid")
    //console.log(props)
    for (let i = 0; i < props.rows.length; i++) {
        
        let row = {...props.rows[i], letters: props.rows[i].letters}
        rowElements.push(<Row row={row} key={nanoid()}/>)
    }

    return (
        <div className="grid">
            {rowElements}
        </div>
    )
}