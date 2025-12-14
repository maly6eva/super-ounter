import {Button} from "@/shared/ui/Button/Button.tsx";
import {ChangeEvent} from "react";
import {InputBlock} from "../../../shared/ui/InputBlock.tsx";
import s from './SettingsInputs.module.css';
import button from '@/shared/ui/Button/Button.module.css'
import {setCountAC, setIsSetPressedAC, setValuesAC} from "@/features/counter/model/counter-reducer.ts";
import {useAppDispatch} from "@/shared/lib/redux/useAppDispatch.ts";
import {useAppSelector} from "@/shared/lib/redux/useAppSelector.ts";
import {selectCounter} from "@/features/counter/model/counter-selectors.ts";



export const SettingsInputs = () => {
    const dispatch = useAppDispatch()
    const counter = useAppSelector(selectCounter)
    const {start, max} = counter

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

