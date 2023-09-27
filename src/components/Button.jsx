'use client'
import '../app/globals.css'
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export default function Button({ btnLabel, variant, size, state }) {

    //Set the size class for buttons
    const btnSizeClass = size === 'sm' ? 'sm_btn' : size === 'lg' ? 'lg_btn' : 'md_btn';

    //Assign the hierarchy class to buttons and incorporate it with the size class
    const btnClass = `${btnSizeClass} ${variant === 'primary' ? 'primary_btn' : variant === 'secondary' ? 'secondary_btn' : 'terciary_btn'}`;
    
    //
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        {state === 'disabled' ? setIsDisabled(true) : setIsDisabled(false)}
    }, [state]);
    
    
    return(
        <button 
        className={btnClass}
        disabled={isDisabled} >{btnLabel}</button>
    );
}

Button.propTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary', 'terciary']).isRequired,
    size: PropTypes.oneOf(['sm', 'md', 'lg']).isRequired,
    btnLabel: PropTypes.string.isRequired,
    
};