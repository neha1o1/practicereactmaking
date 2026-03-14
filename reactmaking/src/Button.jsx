import {useState} from 'react';

export default function Button(){
    const [ count, setCount] = useState(0);

    function handleClick(){
        setCount(count + 1);
    }
    return (
        <div>
            <h1>Incrmenet</h1>
            <button onClick = {handleClick}>{count}</button>
        </div>
    );
}