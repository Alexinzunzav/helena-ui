'use client'
import { useEffect, useState } from 'react';
import '../app/globals.css'

export default function TextInput({ labelText, placeholderText, helpText, id, name, state, size }) {

     //Set the size class for inputs
    const textInputSizeClass = size === 'sm' ? 'sm_input sm_label' : size === 'lg' ? 'lg_input lg_label' : 'md_input md_label';
    const textInputClass = `input ${textInputSizeClass}`;
    
    //Enable disable state to the button
    const [isDisabled, setIsDisabled] = useState(false);
    useEffect(() => {
        {state === 'disabled' ? setIsDisabled(true) : setIsDisabled(false)}
    }, [state]);

    return(
        <div className='input_container'>
            <label className={`input_label ${ size === 'sm' ? 'sm_label' : size === 'lg' ? 'lg_label' : 'md_label'}`} for={id}>{labelText}</label>
            
            <input 
            type='text'
            className={textInputClass}
            id={id}
            name={name}
            placeholder={placeholderText}
            disabled={isDisabled}></input>
            
            <span
            className='input_helpText'>{helpText}</span>
        </div>
        
    );
}