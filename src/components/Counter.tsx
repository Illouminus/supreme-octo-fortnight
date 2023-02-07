import React, {useState} from 'react';
import classes from './Counter.module.scss'
export const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => {
            setCount(count + 1)}
            } className={classes.button}>Increment</button>
        </div>
    );
};

