import { useState } from "react"
import './Counter.scss'
import classes from './Counter.module.scss'

export const Counter = () => {
  const [count, setCount] = useState(0);
  
  const increment = () => setCount(count + 1);
  
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>+</button>
      <button className={classes['btn-red']} onClick={decrement}>-</button>
    </div>
  )
}