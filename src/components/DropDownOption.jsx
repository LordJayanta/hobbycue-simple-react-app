import React from 'react'

const DropDownOption = ({title, iconPath}) => {
    return (
        <div className='flex items-center justify-center gap-2'>
            <figure>
                <img src={iconPath} alt="" />
            </figure>
            <span>{title}</span>
            <figure>
                <img src=".\img\png\icons8_expand_arrow 1.png" alt="" />
            </figure>
        </div>
    )
}

export default DropDownOption
