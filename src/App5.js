import React, { useState } from "react";
export default function App5(){
    const[count,setCount]=useState(0)
    const inc=()=>{
        setCount(count+1)
    }
    return (
        <div>
        {count}
        <button onClick={inc}>Click</button>
        </div>
    )
}