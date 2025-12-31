import s from './ResultCounter.module.css';

type ResultCountertype = {
    count: number
    max: number
    start: number
    isSetPressed: boolean
}


export const ResultCounter = ({count, max, start, isSetPressed}: ResultCountertype) => {
    const error = max < 0 || start < 0 || start === max;

    let message;
    if (error) {
        message = "Incorrect value!";
    } else if (!isSetPressed) {
        message = "Enter values and press 'Set'";
    } else {
        message = count
    }

    const isRed = error || (isSetPressed && count === max)

    return (
        <h2 className={`${s.countValue} ${isRed ? s.countRed : ''}`}>
            {message}
        </h2>
    );
};

