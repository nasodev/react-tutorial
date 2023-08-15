import { useEffect, useState } from "react";

export default function CoinBody() {
    const [loading,setLoading] = useState(true);
    const [coins,setCoins] = useState({});
    const [selectCoin,setSelectCoin] = useState('BTC');
    const [changeCoin,setChangeCoin] = useState(null);
    const [money,setMoney] = useState('');

    useEffect(() => {
        fetch("https://api.bithumb.com/public/ticker/ALL_KRW").then((response)=>(response.json())).then((json)=>{
            setCoins(json.data);
            setLoading(false);
        });
    },[]);
    const calculateChangeCoin = (coinValue, enteredMoney) => {
        const price = coins[coinValue]?.closing_price;
        if (price) {
            const amount = enteredMoney / price;
            return amount.toFixed(10);
        }
        return null;
    };
    
    const selectOnChange = (e) => {
        const coinValue = e.target.value;
        setSelectCoin(coinValue);
        if (money) {
            const amount = calculateChangeCoin(coinValue, money);
            if (amount) setChangeCoin(amount);
        }
    };
    
    const inputOnChange = (e) => {
        const enteredMoney = e.target.value;
        setMoney(enteredMoney);
        const amount = calculateChangeCoin(selectCoin, enteredMoney);
        if (amount) setChangeCoin(amount);
    };
    

    function selectBoxCoin() {
        return (
            <select onChange={selectOnChange} value={selectCoin}>
                {Object.entries(coins).map(([key,value]) => {
                    return value.closing_price ? <option key={key} value={key}>{key}: {value.closing_price} 원</option>: null;

                })}
            </select>
        )
    }


    return (
        <div>
            <h1>Coins {loading===true ? null : ('(count' + (Object.entries(coins).length -1) + ')')} </h1>
            {loading===true ? <strong>loading...</strong> : selectBoxCoin()}
            <hr />
            your money : &nbsp;
            <input 
                onChange={inputOnChange}
                value = {money}
            /> {selectCoin} : {changeCoin}
        </div>
    );
}