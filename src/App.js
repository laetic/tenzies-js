import React from "react"
import Die from './Die'
import {nanoid} from 'nanoid'
import Confetti from "react-confetti"
import Keyboard from "./Keyboard"

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
        if(tenzies) {
            dieList.forEach((die) => die.isHeld = false)
        }
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

    const [tenzies, setTenzies] = React.useState(false)
    const [dieList, setDieList] = React.useState(initDiceValues())
    const dieElements = dieList.map((die) => <Die value={die.value} key={die.id} id={die.id} isHeld={die.isHeld} holdDie={holdDie}/>);
    //console.log(dieList)

    React.useEffect(() => {
        const val = dieList[0].value;
        const allHeld = dieList.every((die) => die.isHeld)
        const allVal = dieList.every((die) => die.value === val)
        setTenzies(allHeld && allVal)
    }, [dieList])

    return (
        <main>
            <h1> Wordle </h1>
            <p> Roll until all the dice are the same. Click each die to freeze it at its current value between rolls</p>
            <div className="dice">
                {dieElements}
            </div>
            <Keyboard />
        </main>
    )
}