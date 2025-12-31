import {memo} from "react";

type ButtonProps = {
    text: string
    onClick?: () => void
    className?: string
    disabled?: boolean
}

 const ButtonRaw = (props:ButtonProps) => {
    const {
        text,
        onClick,
        className = '',
        disabled = false
    } = props


    return (
        <button className={className} onClick={onClick} disabled={disabled}>
            {text}
        </button>
    );
};

export const Button = memo(ButtonRaw)