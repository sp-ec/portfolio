import React from 'react'
import HeaderBG from './HeaderBG'

export default function Header() {
    return (
        <>
            <HeaderBG />
            <h1 className='top-0 tracking-widest text-left bg-gradient-to-r from-zinc-100 to-zinc-300 inline-block text-transparent bg-clip-text z-10 absolute'>NOAH<br></br> MARTINEAU</h1>
            <div id='headerSpace'></div>
        </>
    )
}
