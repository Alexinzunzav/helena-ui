'use client'
import '../app/globals.css'

export default function Chip({ chipLabel, colorVariant }) {

    let colorVariantClass = `${colorVariant === 'yellow' ? 'chip_yellow' : colorVariant === 'blue' ? 'chip_blue' : colorVariant === 'orange' ? 'chip_orange' : colorVariant === 'green' ? 'chip_green' : colorVariant === 'pink' ? 'chip_pink' : colorVariant === 'white' ? 'chip_white' : 'chip'} `;

    return(
    <div 
    className={colorVariantClass}
    chipLabel>{chipLabel}</div>
    );
}



