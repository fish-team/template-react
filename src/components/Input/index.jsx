import React, { Component }from 'react'

const handleSubmit = (e,onSubmit) => {
    let value = e.target.value;
    if(e.keyCode === 13 && value.trim()) {
        onSubmit(e.target.value);
    }
    
}

const Input = ({ onSubmit }) => {
    return (
        <div>
            <input type="text" placeholder="input text"  onKeyUp={(e)=> {handleSubmit(e,onSubmit)}} />
        </div>
    )
}

export default Input