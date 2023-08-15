import {useState} from 'react';

export default function DistanceConvert() {
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
    const convertedAmount = flip ?  (amount / 0.621371) :  (amount * 0.621371);

    return (
        <div>
            <label htmlFor='km'>km</label>
            <input value={flip ? convertedAmount : amount} id='km' placeholder='km' type='number' onChange={onChangeAmount} disabled={flip} />
            <h4>conver {flip ? 'mile' : 'km'} : {amount}</h4>
            <label htmlFor='mile'>mile</label>
            <input value={flip ? amount : convertedAmount}  id='mile' placeholder='hours' type='number' onChange={onChangeAmount} disabled={!flip}  />
            <br />
            <button onClick={onClickReset}>reset</button>
            <button onClick={onClickFlip}>{flip ? 'turn back' : 'flip'}</button>
        </div>
    );
}