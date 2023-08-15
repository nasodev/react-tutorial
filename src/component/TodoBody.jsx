import { useEffect, useState } from "react";

export default function TodoBody() {
    const [toDo,setToDo] = useState("");
    const [toDos,setToDos] = useState([]);
    
    useEffect(() => {
        console.log("after :" , toDos);
    },[toDos]);
    const onchange = (e) => {
        setToDo(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (toDo === "") {
            return;
        }
        console.log("before : " , toDos);
        setToDos([toDo,...toDos]);
        setToDo("");
    }

    return (
        <div>
            <h2>to to ({toDos.length})</h2>
            <form onSubmit={onSubmit}>
                <input 
                    onChange={onchange}
                    value={toDo}
                    type="text"
                    placeholder="write todo"
                />
                <button >Add To Do</button>
            </form>
            <hr />
            <ul>
                {toDos.map((toDo,i)=> (<li key={i}>{toDo}</li>))}    
            </ul>
        </div>
    );
}