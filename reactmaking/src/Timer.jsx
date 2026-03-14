import {useState} from 'react';

export default function Timer(){
    const [time,setTime] = useState(30);
    if(time > 0){ setTimeout(()=> setTime(time-1),1000)}
    
    return (<div>
        <h1>Timer</h1>
        <h2>{time}</h2>
    </div>);
}