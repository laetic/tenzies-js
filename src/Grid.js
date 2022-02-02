import React from "react"
import {nanoid} from 'nanoid'


function Square(props) {
    return (
        <div className="grid--square">
            <h1>{props.square.letter}</h1>
        </div>
    )
}

function Row(props) {
        
    const squareElements = []
    for (let i = 0; i < props.row.squareNum; i++) {
        squareElements.push(<Square square={props.row.squares[i]} key={nanoid()}/>)
    }

    return (
        <div className="grid--row">
            {squareElements }
        </div>
    )
}

export default function Grid(props) {
    const rowElements = []
    // console.log(props)
    for (let i = 0; i < props.grid.length; i++) {
        rowElements.push(<Row row={props.grid[i]} key={nanoid()}/>)
    }

    return (
        <div className="grid">
            {rowElements}
        </div>
    )
}