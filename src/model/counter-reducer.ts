import {CounterType} from "../App.tsx";

export const initialState: CounterType = {
    count: 0,
    max: 0,
    start: 0,
    isSetPressed: false
}
export const INCREMENT = 'INCREMENT'
export const RESET = 'RESET'
export const SET_VALUES = 'SET_VALUES'
export const SET_IS_SET_PRESSED = 'SET_IS_SET_PRESSED'
export const SET_COUNT = 'SET_COUNT'

export const incrementAC = () => ({type: INCREMENT} as const)
export const resetAC = () => ({type: RESET} as const)
export const setValuesAC = (max: number, start: number) => ({
    type: SET_VALUES,
    payload: {max, start}
} as const)
export const setIsSetPressedAC = (value: boolean) => ({
    type: SET_IS_SET_PRESSED,
    payload: value
} as const)
export const setCountAC = (value: number) => ({
    type: SET_COUNT,
    payload: value
}as const)

export type CounterActions =
    | ReturnType<typeof incrementAC>
    | ReturnType<typeof resetAC>
    | ReturnType<typeof setValuesAC>
    | ReturnType<typeof setIsSetPressedAC>
    | ReturnType<typeof setCountAC>

export const counterReducer = (state: CounterType = initialState, action: CounterActions): CounterType => {
switch (action.type) {
    case INCREMENT:
        return {
            ...state,
            count: Math.min(state.count + 1, state.max)
        }
    case RESET:
        return {
            ...state,
            count: state.start
        }
    case SET_VALUES:
        return {
            ...state,
            max: action.payload.max,
            start: action.payload.start

        }
    case SET_IS_SET_PRESSED:
        return {
            ...state,
            isSetPressed: action.payload

        }
    case SET_COUNT:
        return {
            ...state,
            count: action.payload
        }
    default: return state
}
}