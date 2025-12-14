import {ResultCounter} from "@/entities/counter/ui/ResultCounter/ResultCounter.tsx";
import button from "@/shared/ui/Button/Button.module.css";
import {Button} from "@/shared/ui/Button/Button.tsx";
import {useAppDispatch} from "@/shared/lib/redux/useAppDispatch.ts";
import {useAppSelector} from "@/shared/lib/redux/useAppSelector.ts";
import {selectCounter} from "@/features/counter/model/counter-selectors.ts";
import {incrementAC, resetAC, setIsSetPressedAC} from "@/features/counter/model/counter-reducer.ts";


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
    const resInc = () => {
        dispatch(incrementAC())
    }

    const resReset = () => {
        dispatch(resetAC())
        dispatch(setIsSetPressedAC({value: true}))
    }
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

