import s from'./App.module.css'
import {CounterPages} from "@/features/counter/ui/CounterPages/CounterPages.tsx";


export const App = () => {
    return (
        <div className={s.app}>
            <CounterPages/>
        </div>
    )
}


