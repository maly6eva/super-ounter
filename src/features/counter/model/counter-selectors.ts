import {RootState} from "@/app/store.ts";
import {CounterTypes} from "@/features/counter/model/counter-reducer.ts";


export const selectCounter = (state: RootState): CounterTypes => state.counter