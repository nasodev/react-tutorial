import {useState} from 'react';

export default function TimeConvert() {
    const [amount, setAmount] = useState(0);
    const [flip, setFlip] = useState(false);

    function onChangeAmount(e) {
        setAmount(e.target.value);
    }
    function onClickReset() {
        setAmount(0);
    }
    function onClickFlip() {
        setAmount(0);
        setFlip((currnet) => !currnet);
    }
    return (
        <div>
            <label htmlFor='minutes'>minutes</label>
            <input value={flip ? amount * 60 : amount} id='minutes' placeholder='minutes' type='number' onChange={onChangeAmount} disabled={flip} />
            <h4>conver {flip ? 'hours' : 'minutes'} : {amount}</h4>
            <label htmlFor='hours'>hours</label>
            <input value={flip ? amount : Math.round(amount/60)}  id='hours' placeholder='hours' type='number' onChange={onChangeAmount} disabled={!flip}  />
            <br />
            <button onClick={onClickReset}>reset</button>
            <button onClick={onClickFlip}>{flip ? 'turn back' : 'flip'}</button>
        </div>
    );
}