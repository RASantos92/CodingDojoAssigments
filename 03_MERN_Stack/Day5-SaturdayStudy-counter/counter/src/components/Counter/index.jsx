import * as React from 'react';
import { useState } from 'react';
import './style.scss';


function Counter() {
    const [count, setCount] = useState(0);

    return <div className="counter">
        <div className="counter-container">
            <p className={count % 2 === 0 ? 'black' : 'gray'}>{count}</p>
            <button onClick={() => {
                setCount(count + 1)
            }}>Up</button>
            <button id="button2"onClick={() => {
                setCount(count - 1)
            }}>Down</button>
        </div>
    </div>;


}





export default Counter;