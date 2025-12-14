import {ChangeEvent} from "react";
import s from '../../features/counter/ui/SettingsInputs.module.css';

type InputBlockType = {
    label: string;
    value: number;
    hasError?: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const InputBlock = ({label, value, hasError, onChange}: InputBlockType) => {
    return (
        <label className={s.label}>
            {label}
            <input
                type="number"
                className={`${s.input} ${hasError ? s.err : ''}`}
                value={value}
                onChange={onChange}
            />
        </label>
    );
};

