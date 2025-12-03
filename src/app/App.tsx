import './App.css'
import {ChangeEvent} from "react";
import {Button} from "../components/Button/Button.tsx";
import {ResultCounter} from "../components/ResultCounter/ResultCounter.tsx";
import {SettingsInputs} from "../components/SettingsInputs/SettingsInputs.tsx";
import button from "../components/Button/Button.module.css"
import {
    incrementAC,
    resetAC, setCountAC,
    setIsSetPressedAC,
    setValuesAC
} from "../model/counter-reducer.ts";
import {useAppDispatch} from "../common/hooks/useAppDispatch.ts";
import {useAppSelector} from "../common/hooks/useAppSelector.ts";
import {selectCounter} from "../model/counter-selectors.ts";

export type CounterType = {
    count: number,
    max: number,
    start: number,
    isSetPressed: boolean
}

export const App = () => {
    const dispatch = useAppDispatch()
    const counter = useAppSelector(selectCounter)


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
        dispatch(setValuesAC({max: counter.max, start: +e.currentTarget.value}))
        dispatch(setIsSetPressedAC({value: false}))
    }

    const maxCounter = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setValuesAC({max: +e.currentTarget.value, start: counter.start}))
        dispatch(setIsSetPressedAC({value: false}))
    }

    const setButton = () => {
        dispatch(setCountAC({value: counter.start}));
        dispatch(setIsSetPressedAC({value: true}))
    }

    const resInc = () => {
        dispatch(incrementAC())
    }

    const resReset = () => {
        dispatch(resetAC())
        dispatch(setIsSetPressedAC({value: true}))
    }

    const disabled = counter.max < 0 || counter.start < 0 || counter.start === counter.max || counter.isSetPressed

    return (
        <div className="app">
            <SettingsInputs
                max={counter.max}
                start={counter.start}
                disabled={disabled}
                startCounter={startCounter}
                maxCounter={maxCounter}
                setButton={setButton}
            />
            <div className="counter-box">
                <ResultCounter
                    count={counter.count}
                    max={counter.max}
                    start={counter.start}
                    isSetPressed={counter.isSetPressed}
                />
                <div className={button.buttons}>
                    <Button
                        className={`${button.btn} ${button.incBtn} ${counter.count === counter.max ? button.disabledStyleInc : ''}`}
                        onClick={resInc}
                        disabled={counter.count === counter.max}
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


