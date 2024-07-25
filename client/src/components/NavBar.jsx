import React, { Component } from 'react'
import { useState, useEffect } from 'react'

const NavBar = () => {

    const [scrollHeight, setScrollHeight] = useState([{}])

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScrollHeight(window.scrollY)
            if (scrollHeight < 560) {
                document.getElementById('navigation').classList.add('navAtTop')
                
            } else {
                document.getElementById('navigation').classList.remove('navAtTop')
            }
        }, { passive: true })
    })  

    return (
        <>
            <div className='bg-zinc-700 w-screen left-0 fixed h-16 top-0 z-10 shadow-lg' id='navigation'>
                <nav>
                <ul className='flex justify-center align-middle'>
                    <a href="#" className='hover-underline-animation'><li className='pl-8 pr-8 p-2 mt-2 list-none headerLink'>Home</li></a>
                    <a href="#projects" className='hover-underline-animation'><li className='pl-8 pr-8 p-2 mt-2 list-none headerLink'>Projects</li></a>
                    <a href="#stats" className='hover-underline-animation'><li className='pl-8 pr-8 p-2 mt-2 list-none headerLink'>Stats</li></a>
                    <a href="#contact" className='hover-underline-animation'><li className='pl-8 pr-8 p-2 mt-2 list-none headerLink'>Contact</li></a>
                </ul>
                </nav>
            </div>
        </>
        
    )

}

export default NavBar