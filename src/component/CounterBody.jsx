import {useState} from 'react';

export default function CounterBody() {
    const [counter,setCounter] = useState(0);

    function countUp() {
        setCounter(counter+1);
    }
    return (
        <div style={{paddingLeft:"50px"}}>
            <h3>Counter : {counter}</h3>
            <button onClick={countUp}>click</button>
        </div>
    );
}