import {useState} from 'react';
import TimeConvert from './TimeConverter';
import DistanceConvert from './DistanceConverter';

export default function ConverterBody() {
    const [type,setType] = useState("-1");
    function onChangeType(e) {
        setType(e.target.value);
    }
    return (
        <div>
            <h1>converter</h1>
            <select value={type} onChange={onChangeType}>
                <option value="-1">select unit</option>
                <option value="0">time</option>
                <option value="1">distance</option>
            </select>
            <hr />
            {type === "-1" ? "please select your unit" : null}
            {type === "0" ? <TimeConvert /> : null}
            {type === "1" ? <DistanceConvert /> : null}
        </div>
    );
}