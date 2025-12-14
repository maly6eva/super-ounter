type ButtonProps = {
    text: string
    onClick?: () => void
    className?: string
    disabled?: boolean
}

export const Button = (props:ButtonProps) => {
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
