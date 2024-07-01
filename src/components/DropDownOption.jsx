import React, { useState } from 'react'

const DropDownOption = ({ title, iconPath, dropdownMenu = {} }) => {
    const [isDroupDown, setIsDroupDown] = useState(false)
    return (
        <div className='relative'>
            <div className='flex items-center justify-center gap-2 cursor-pointer'
                onClick={() => { setIsDroupDown(!isDroupDown) }}>
                <figure>
                    <img src={iconPath} alt="" />
                </figure>
                <span>{title}</span>
                <figure>
                    <img src=".\img\png\icons8_expand_arrow 1.png" alt="" />
                </figure>
            </div>
            {isDroupDown &&
                <div className="dropdown-menu absolute left-0 top-[200%] w-full rounded-b-lg border border-[#CED4DA] text-[#6D747A] bg-white">
                    {dropdownMenu.map((elem) => {
                        return (
                            <div key={elem.name} className='dropdown-options px-4 py-2 border-t border-[#CED4DA] z-50 bg-white cursor-pointer'>
                                <a href={elem.path}>{elem.name}</a>
                            </div>
                        )
                    })
                    }
                </div>}
        </div>
    )
}

export default DropDownOption
