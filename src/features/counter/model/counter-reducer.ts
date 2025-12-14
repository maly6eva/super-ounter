
import {createAction, createReducer} from "@reduxjs/toolkit";

export type CounterTypes = {
    count: number
    max: number
    start: number
    isSetPressed: boolean
}

export const initialState: CounterTypes = {
    count: 0,
    max: 0,
    start: 0,
    isSetPressed: false
}

export const incrementAC = createAction('counter/increment')
export const resetAC = createAction('counter/reset')
export const setValuesAC = createAction<{ max: number, start: number }>('counter/setValues')
export const setIsSetPressedAC = createAction<{ value: boolean }>('counter/setIsSetPressed')
export const setCountAC = createAction<{ value: number }>('counter/setCount')

export const counterReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(incrementAC, (state) => {
            state.count = Math.min(state.count + 1, state.max)
        })
        .addCase(resetAC, (state) => {
            state.count = state.start
        })
        .addCase(setValuesAC, (state, action) => {
            state.max = action.payload.max
            state.start = action.payload.start
        })
        .addCase(setIsSetPressedAC, (state, action) => {
            state.isSetPressed = action.payload.value
        })
        .addCase(setCountAC, (state, action) => {
            state.count = action.payload.value
        })
})


