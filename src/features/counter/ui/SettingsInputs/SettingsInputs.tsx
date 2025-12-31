import {Button} from "@/common/components/Button/Button.tsx";
import {ChangeEvent, useCallback} from "react";
import {InputBlock} from "@/common/components/InputBlock/InputBlock.tsx";
import s from './SettingsInputs.module.css';
import button from '@/common/components/Button/Button.module.css'
import {setCountAC, setIsSetPressedAC, setValuesAC} from "@/features/counter/model/counter-reducer.ts";
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";
import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {selectCounter} from "@/features/counter/model/counter-selectors.ts";



export const SettingsInputs = () => {
    const dispatch = useAppDispatch()
    const counter = useAppSelector(selectCounter)
    const {start, max} = counter

    const startCounter = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setValuesAC({max: counter.max, start: +e.currentTarget.value}))
        dispatch(setIsSetPressedAC({value: false}))
    }, [dispatch, counter.max])

    const maxCounter = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setValuesAC({max: +e.currentTarget.value, start: counter.start}))
        dispatch(setIsSetPressedAC({value: false}))
    }, [dispatch, counter.start])
    const setButton = useCallback(() => {
        dispatch(setCountAC({value: counter.start}));
        dispatch(setIsSetPressedAC({value: true}))
    }, [dispatch, counter.start])
    const disabled = counter.max < 0 || counter.start < 0 || counter.start === counter.max || counter.isSetPressed
    return (
        <div className={s.settingsBox}>
            <InputBlock
                label={'Max value:'}
                hasError={max < 0 || start === max}
                value={max}
                onChange={maxCounter}
            />
            <InputBlock
                label={'Start value:'}
                hasError={start < 0 || start === max}
                value={start}
                onChange={startCounter}
            />
            <Button
                className={`${button.btn} ${button.setBtn} ${disabled ? button.setBtnDisabled : ''}`}
                onClick={setButton}
                disabled={disabled}
                text={'Set'}
            />
        </div>
    );
};

