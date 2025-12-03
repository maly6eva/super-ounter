import './App.css'
import {ChangeEvent, useReducer} from "react";
import {Button} from "./components/Button/Button.tsx";
import {ResultCounter} from "./components/ResultCounter/ResultCounter.tsx";
import {SettingsInputs} from "./components/SettingsInputs/SettingsInputs.tsx";
import button from "./components/Button/Button.module.css"
import {
    counterReducer,
    incrementAC,
    initialState,
    resetAC, setCountAC,
    setIsSetPressedAC,
    setValuesAC
} from "./model/counter-reducer.ts";

export type CounterType = {
    count: number,
    max: number,
    start: number,
    isSetPressed: boolean
}

export const App = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState);

    
    // useEffect(() => {
    //     const counterMax = localStorage.getItem('counter-max')
    //     const counterStart = localStorage.getItem('counter-start')
    //     const counterCount = localStorage.getItem('counter-count')
    //     const counterIsSet = localStorage.getItem('counter-isSet')
    //
    //     if (counterMax) {
    //         const newMax = JSON.parse(counterMax)
    //         setMax(newMax)
    //     }
    //     if (counterStart) {
    //         const newStart = JSON.parse(counterStart)
    //         setStart(newStart)
    //     }
    //     if (counterCount) {
    //         const newCount = JSON.parse(counterCount)
    //         setCount(newCount)
    //     }
    //     if (counterIsSet) {
    //         const isSet = JSON.parse(counterIsSet)
    //         setIsSetPressed(isSet)
    //     }
    // }, [])
    //
    // useEffect(() => {
    //     localStorage.setItem('counter-max', JSON.stringify(max))
    //     localStorage.setItem('counter-start', JSON.stringify(start))
    //     localStorage.setItem('counter-count', JSON.stringify(count))
    //     localStorage.setItem('counter-isSet', JSON.stringify(isSetPressed))
    // }, [max, start, count, isSetPressed])


    const startCounter = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setValuesAC(state.max, +e.currentTarget.value))
        dispatch(setIsSetPressedAC(false))
    }

    const maxCounter = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setValuesAC(+e.currentTarget.value, state.start))
        dispatch(setIsSetPressedAC(false))
    }

    const setButton = () => {
        dispatch(setCountAC(state.start));
        dispatch(setIsSetPressedAC(true))
    }

    const resInc = () => {
        dispatch(incrementAC())
    }

    const resReset = () => {
        dispatch(resetAC())
        dispatch(setIsSetPressedAC(true))
    }

    const disabled = state.max < 0 || state.start < 0 || state.start === state.max || state.isSetPressed

    return (
        <div className="app">
            <SettingsInputs
                max={state.max}
                start={state.start}
                disabled={disabled}
                startCounter={startCounter}
                maxCounter={maxCounter}
                setButton={setButton}
            />
            <div className="counter-box">
                <ResultCounter
                    count={state.count}
                    max={state.max}
                    start={state.start}
                    isSetPressed={state.isSetPressed}
                />
                <div className={button.buttons}>
                    <Button
                        className={`${button.btn} ${button.incBtn} ${state.count === state.max ? button.disabledStyleInc : ''}`}
                        onClick={resInc}
                        disabled={state.count === state.max}
                        text={'Inc'}
                    />
                    <Button
                        className={`${button.btn} ${button.resetBtn}`}
                        onClick={resReset}
                        text={'Reset'}
                    />
                </div>
            </div>
        </div>
    )
}


