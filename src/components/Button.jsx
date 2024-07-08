import React from 'react'
import './Button.css'

const Button = ({ btnVal, id, href }) => {

    return (
        <a id={id} href={href} className='btn px-6 bg-white text-black text-2xl cursor-pointer'>
            <span>{btnVal}</span>
            <div className='btn-icon ml-2 flex items-center justify-center gap-10'>
                <i class='icon bx bx-up-arrow-alt'></i>
                <div className="icon-bg"></div>
            </div >
        </a >
    )
}

export default Button