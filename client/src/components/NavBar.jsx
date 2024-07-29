import React, { Component } from 'react'
import { useState, useEffect } from 'react'

const NavBar = () => {

    const handleScroll = () => {
        setScrollHeight(window.scrollY)
        if (scrollHeight < 598) {
            document.getElementById('navigation').classList.add('navAtTop')
            document.getElementById('navigation').classList.remove('navMoving')

        } else {
            document.getElementById('navigation').classList.remove('navAtTop')
            document.getElementById('navigation').classList.add('navMoving')
        }
    }

    const [scrollHeight, setScrollHeight] = useState([{}])

    useEffect(() => {
        handleScroll()
        window.addEventListener('scroll', () => {
            handleScroll()
        }, { passive: true })
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    return (
        <>
            <div className='backdrop-blur-xl bg-zinc-900 w-screen left-0 fixed h-16 top-0 z-10 shadow-lg' id='navigation'>
                <nav>

                    <ul className='flex justify-center align-middle' id='nav-long'>
                        <a href="#" className='hover-underline-animation'><li className='pl-8 pr-8 p-2 mt-2 list-none headerLink'>Home</li></a>
                        <a href="#stats" className='hover-underline-animation'><li className='pl-8 pr-8 p-2 mt-2 list-none headerLink'>Stats</li></a>
                        <a href="#projects" className='hover-underline-animation'><li className='pl-8 pr-8 p-2 mt-2 list-none headerLink'>Projects</li></a>
                        <a href="#contact" className='hover-underline-animation'><li className='pl-8 pr-8 p-2 mt-2 list-none headerLink'>Contact</li></a>
                    </ul>

                </nav>
            </div>
        </>

    )

}

export default NavBar