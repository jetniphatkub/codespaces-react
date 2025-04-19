import { useState } from "react";
export default function Counter(){
    const [count,setCount]= useState(0)
    const [value,setValue]=useState(0)
    console.log(`You clicked ${count} times`);
    return(<>
        <button onClick={()=>setCount(count+1)}>plus Me!</button>
        <button onClick={()=>setCount(0)}>reset Me!</button>
        <p>You Clicked {count} times</p>
        <input type="text" value={value} onChange={(event)=>setValue(event.target.value)}/>
        <button onClick={()=>setValue("")}>reset!</button>
        <h4>{parseFloat(value)}$ to {(value*33.35).toFixed(2)} bath</h4>
        <h4>You typed {value.length} characters</h4>
        <img src="/Octocat.png"/>
    </>);
}