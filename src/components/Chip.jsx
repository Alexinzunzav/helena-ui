'use client'
import '../app/globals.css'

export default function Chip({ chipLabel, colorVariant }) {

    let colorVariantClass = `${colorVariant === 'yellow' ? 'chip_yellow' : colorVariant === 'blue' ? 'chip_blue' : colorVariant === 'orange' ? 'chip_orange' : colorVariant === 'green' ? 'chip_green' : colorVariant === 'pink' ? 'chip_pink' : 'chip_white'} `;

    return(
    <div 
    className={`chip ${colorVariantClass}`}
    chipLabel>{chipLabel}</div>
    );
}



