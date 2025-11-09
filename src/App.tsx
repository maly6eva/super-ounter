import './App.css'
import {ChangeEvent, useState} from "react";

export const App = () => {
    const [count, setCount] = useState<number>(0)
    const [max, setMax] = useState<string>('0')
    const [start, setStart] = useState<string>('0')
    const [isSet, setIsSet] = useState<boolean>(false)
    const [error, setError] = useState<string>('')


    const maxRes = Number(max)
    const startRes = Number(start)

    const maxOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMax(e.currentTarget.value)
        if (maxRes >= 99) {
            setError('Max value')
        } else {
            setError('')
        }
    }

    const startOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStart(e.currentTarget.value)
        if (startRes <= 1) {
            setError('no such meaning')
        } else {
            setError('')
        }
    }

    const resultSet = () => {
        if (start === '') return
        setCount(startRes)
        setIsSet(true)
    }

    const resultInc = () => {
        setCount(prev => {
            if (isNaN(maxRes) || isNaN(startRes)) return prev
            if (prev >= maxRes) return prev
            return prev + 1
        })
    }

    const resultReset = () => {
        setCount(startRes)
    }

    return (
        <div className="app">
            <div className="settings-box">
                <label>
                    Max value:
                    <input type="number" className="input" value={max ?? ''} onChange={maxOnChange}/>
                    <p className='err'> {error}</p>
                </label>

                <label>
                    Start value:
                    <input type="number" className="input" value={start ?? ''} onChange={startOnChange}/>
                    <p className='err'> {error}</p>
                </label>

                <button className="btn set-btn" onClick={resultSet}>Set</button>
            </div>

            <div className="counter-box">
                <h2 className={`count-value ${isSet && count === maxRes ? "count-red" : ""}`}>{count}</h2>
                <div className="buttons">
                    <button className="btn inc-btn" onClick={resultInc}>Inc</button>
                    <button className="btn reset-btn" onClick={resultReset}>Reset</button>
                </div>
            </div>
        </div>
    )
}
