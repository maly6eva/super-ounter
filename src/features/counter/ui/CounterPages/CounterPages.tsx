import {SettingsInputs} from "@/features/counter/ui/SettingsInputs/SettingsInputs.tsx";
import {CounterPanel} from "@/features/counter/ui/CounterPanel/CounterPanel.tsx";
import s from './CounterPages.module.css'
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "@/common/hooks";
import {setCountAC, setIsSetPressedAC, setValuesAC} from "@/features/counter/model/counter-reducer.ts";
import {selectCounter} from "@/features/counter";



export const CounterPages = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        const counterMax = localStorage.getItem('counter-max')
        const counterStart = localStorage.getItem('counter-start')
        const counterCount = localStorage.getItem('counter-count')
        const counterIsSet = localStorage.getItem('counter-isSet')

        if (counterMax && counterStart) {
            dispatch(setValuesAC({max: JSON.parse(counterMax), start: JSON.parse(counterStart)}))
        }
        if (counterCount) {
            dispatch(setCountAC({value: JSON.parse(counterCount)}))

        }

        if (counterIsSet) {
            dispatch(setIsSetPressedAC({value: JSON.parse(counterIsSet)}))
        }
    }, [])

    const counter = useAppSelector(selectCounter)

    useEffect(() => {
        localStorage.setItem('counter-max', JSON.stringify(counter.max))
        localStorage.setItem('counter-start', JSON.stringify(counter.start))
        localStorage.setItem('counter-count', JSON.stringify(counter.count))
        localStorage.setItem('counter-isSet', JSON.stringify(counter.isSetPressed))
    }, [counter.max, counter.start, counter.count, counter.isSetPressed])

    return (
       <>
           <SettingsInputs/>
           <div className={s.counter_box}>
               <CounterPanel/>
           </div>
       </>
    );
};

