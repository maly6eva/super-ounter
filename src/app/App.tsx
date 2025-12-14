import s from'./App.module.css'
import {CounterPages} from "@/pages/counter/CounterPages.tsx";


export const App = () => {
    return (
        <div className={s.app}>
            <CounterPages/>
        </div>
    )
}


