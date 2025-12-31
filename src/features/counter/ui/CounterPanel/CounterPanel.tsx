import {ResultCounter} from "@/features/counter/ui/ResultCounter/ResultCounter.tsx";
import button from "@/common/components/Button/Button.module.css";
import {Button} from "@/common/components/Button/Button.tsx";
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";
import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {selectCounter} from "@/features/counter/model/counter-selectors.ts";
import {incrementAC, resetAC} from "@/features/counter/model/counter-reducer.ts";
import {useCallback} from "react";


export const CounterPanel = () => {
    const dispatch = useAppDispatch()
    const counter = useAppSelector(selectCounter)

    const resInc = useCallback(() => {
        dispatch(incrementAC())
    }, [dispatch])

    const resReset = useCallback(() => {
        dispatch(resetAC())
    }, [dispatch])

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

