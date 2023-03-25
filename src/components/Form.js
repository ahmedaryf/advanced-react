import React, {useState, useRef} from 'react'

const Form = () => { 
    const [value, setValue] = useState("");
    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    }
    const onChange = (event) => {
        setValue(event.target.value);
    }
   const onSubmit = (e)=>{
    e.preventDefault();
   }
   
    return ( 
        <div>
            <form onSubmit={onSubmit} > 
                <label>Input Field</label>
                <input ref={inputRef} value={value} onChange={onChange} type="text" placeholder='Type text here'/> 
               
            </form> 
            <h2>{value}</h2>
        </div>
    ); 
   }; 

export default Form