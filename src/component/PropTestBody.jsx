import { useState,memo,useEffect } from "react";

function Btn({sText,onClick,bIsBig}) {
    console.log(sText,' re render');
    return (
        <button
            onClick ={onClick}
            style={{
                backgroundColor : "tomato",
                fontSize : bIsBig ? 20 : 15,
                border : 0,
                borderRadius : 10
            }}
        >{sText}</button>
    );
}

const Memorise = memo(Btn);
let counter = 0;
function PropTestBody() {
    
    const [sText,setValue] = useState('save');
    // const clickBtn = () => setValue('convert');
    console.log('repeat2');
    
    function clickBtn() {
        console.log('clicked');
        counter++;
       setValue('convert'+counter);
    }
    useEffect(() => {console.log('not repeat')},[]);
    return (
        <div>
            <Memorise sText={sText} onClick={clickBtn} bIsBig={true} />
            <Memorise sText="confirm" />
        </div>
    );
}

export default PropTestBody;