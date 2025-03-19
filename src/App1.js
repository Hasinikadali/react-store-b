import React from "react";
export default function App1(props){
    return (
        <>
        <div style={{backgroundColor:'orange'}}>App1</div>
        <div>
            {props.name}<br></br>
            {props.age}
        </div>
        </>
    )
}