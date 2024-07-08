import React from 'react'

const Footer = () => {
    return (
        <div className='container m-auto bg-black text-white'>
            <div className="mailSection text-center py-4 pb-20">
                <h3 className='text-2xl text-gray-400'>Don't Hesitate, Say Hello 🤗</h3>
                <h2 className='text-6xl max-[1300px]:text-5xl max-[650px]:text-2xl max-[1000px]:text-3xl  max-[485px]:hidden font-[Basement] pt-4 cursor-pointer hover:text-gray-300 transition text-wrap'>muhammadalishakeel66@gmail.com</h2>
            </div>
            <div className="footerDets flex items-center font-[Basement] justify-between px-4 py-4">
                <h2 className='max-[485px]:hidden text-2xl text-gray-400'>© 2024 - <br />
                    ALL RIGHTS RESERVED. </h2>
                <div className="footerSocials max-[485px]:justify-center justify-end w-[100%] flex items-center gap-4 text-gray-400">
                    <a href="mailto:muhammadalishakeel66@gmail.com" className='min-[485px]:hidden'>EMAIL</a>
                    <a href="https://github.com/ali-shakeel-dev" target="_blank">GITHUB</a>
                    <a href="https://www.linkedin.com/in/muhammad-ali-shakeel/" target="_blank">LINKEDIN</a>
                    <a href="https://twitter.com/alishakeel_____" target="_blank">TWITTER</a>
                </div>
            </div>
        </div>
    )
}

export default Footer