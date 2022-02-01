import React from "react"
import Die from './Die'



export default function App() {
    //let initValues = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    let initValues = randomIntArray(1,6,10);

    function randomIntArray(min, max, length) {
        const arr = []
        for (let i = 0; i < length; i++) {
            arr.push((Math.floor(Math.random() * max) + min))
        }
        return arr
    }

    const [dieValues, setDieValues] = React.useState(initValues)

    const dieElements = dieValues.map((val, index) => <Die value={val} key={index} />);
    //console.log(dieValues)
    return (
        <main>
            <div className="dice">
                {dieElements}
            </div>
        </main>
    )
}