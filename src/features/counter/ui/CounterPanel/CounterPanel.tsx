import {ResultCounter} from "@/features/counter/ui/ResultCounter/ResultCounter.tsx";
import button from "@/common/components/Button/Button.module.css";
import {Button} from "@/common/components/Button/Button.tsx";
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";
import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {selectCounter} from "@/features/counter/model/counter-selectors.ts";
import {incrementAC, resetAC, setIsSetPressedAC} from "@/features/counter/model/counter-reducer.ts";
import {useCallback} from "react";


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


export const CounterPanel = () => {
    const dispatch = useAppDispatch()
    const counter = useAppSelector(selectCounter)

    const resInc = useCallback(() => {
        dispatch(incrementAC())
    }, [])

    const resReset = useCallback(() => {
        dispatch(resetAC())
        dispatch(setIsSetPressedAC({value: true}))
    }, [])

    return (
        <>
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
        </>
    );
};

