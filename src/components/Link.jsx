import React from 'react'
import './Link.css'

const Link = ({ val, href, target, id }) => {
    return (
        <a href={href} target={target} id={id} className='hover-underline-animation' > {val}</a>
    )
}

export default Link