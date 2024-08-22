import style from './Counter.module.scss'
import { useState } from 'react'

export const Counter = () =>{
    const [count, setCount] = useState(0)
    const plusCount = () =>{
        setCount(count+1)
    }

    return(
        <div className={style.counterStyle}>
            <h2>Click this button it will count for you!</h2>
        <button onClick={plusCount}>Clicked:{count} times</button>
        </div>
    )

}