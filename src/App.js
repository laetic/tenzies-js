import React from "react"
import Die from './Die'
import {nanoid} from 'nanoid'


export default function App() {
    function randomIntArray(min, max, length) {
        const arr = []
        for (let i = 0; i < length; i++) {
            arr.push((Math.floor(Math.random() * max) + min))
        }
        return arr
    }

    function initDiceValues() {
        const intArray = randomIntArray(1,6,10)
        return (intArray.map((val) => ({value: val, isHeld: false, id:nanoid()})));
    }

    function newDiceValues() {
        return (dieList.map((die) => 
            die.isHeld ? 
                die : 
                ({value: (Math.floor(Math.random() * 6) + 1), isHeld: false, id: die.id})));
    }

    function holdDie(id) {
        setDieList( (prevState) => {
            return prevState.map( (die) => die.id === id ? ({...die, isHeld: !die.isHeld}) : die)
        })
    }

    const [dieList, setDieList] = React.useState(initDiceValues())

    const dieElements = dieList.map((die) => <Die value={die.value} key={die.id} id={die.id} isHeld={die.isHeld} holdDie={holdDie}/>);
    console.log(dieList)
    return (
        <main>
            <div className="dice">
                {dieElements}
            </div>
            <button className="roll" onClick={() => setDieList(newDiceValues)}> Roll </button>
        </main>
    )
}