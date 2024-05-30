import React,{useState} from 'react'
import Proptype from 'prop-types'

export default function Alert(proops) {
    const captialize = (word) =>{
       const lower = word.toLowerCase();
       return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        proops.alert && <div class={`alert alert-${proops.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{captialize(proops.alert.type)}: </strong>{proops.alert.msg}
            
        </div>
    )
}
