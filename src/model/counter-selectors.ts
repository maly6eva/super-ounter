import {CounterType} from "../app/App.tsx";
import {RootState} from "../app/store.ts";

export const selectCounter = (state: RootState): CounterType => state.counter