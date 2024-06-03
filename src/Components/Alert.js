import React,{useState} from 'react'


export default function Alert(proops) {
    const captialize = (word) =>{
       const lower = word.toLowerCase();
       return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style={{height: "50px"}}>
        {proops.alert && <div class={`alert alert-${proops.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{captialize(proops.alert.type)}: </strong>{proops.alert.msg}
            
        </div>}
        </div>
    )
}
