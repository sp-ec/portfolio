import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import HamburgerIcon from '../icons/HamburgerIcon'

const NavBar = () => {

    const handleScroll = () => {
        setScrollHeight(window.scrollY)
        let navBar = document.getElementById('navigation')
        let navAnchor = document.getElementById('navAnchor')

        if (scrollHeight < document.getElementById('navAnchor').offsetTop) {
            navBar.classList.add('navAtTop')
            navBar.classList.remove('navMoving')
            navAnchor.style.height = '0px'


        } else {
            navBar.classList.remove('navAtTop')
            navBar.classList.add('navMoving')
            navAnchor.style.height = '64px'
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
            <div id='navAnchor'></div>
            <div className='backdrop-blur-xl bg-zinc-900 w-screen left-0 fixed h-16 top-0 z-10' id='navigation'>
                <nav>

                    <ul className='flex justify-center align-middle' id='nav-long'>
                        <a href="/#" className='hover-underline-animation'><li className='pl-8 pr-8 p-2 mt-2 list-none headerLink'>Home</li></a>
                        <a href="/#stats" className='hover-underline-animation'><li className='pl-8 pr-8 p-2 mt-2 list-none headerLink'>Stats</li></a>
                        <a href="/#projects" className='hover-underline-animation'><li className='pl-8 pr-8 p-2 mt-2 list-none headerLink'>Projects</li></a>
                        <a href="/#contact" className='hover-underline-animation'><li className='pl-8 pr-8 p-2 mt-2 list-none headerLink'>Contact</li></a>
                    </ul>

                    <ul className='flex flex-row justify-end list-none h-16 place-items-center' id='nav-short'>
                        <li className='flex flex-1 justify-self-start opacity-70'>NOAH MARTINEAU</li>
                        <li className='m-6 mt-7 opacity-70'>
                            <button>
                                <button onClick={() => {
                                    const navDropdown = document.getElementById('nav-dropdown');
                                    navDropdown.classList.toggle('nav-expanded');

                                    const navBar = document.getElementById('navigation');
                                    navBar.classList.toggle('nav-darken');
                                }}>
                                    <HamburgerIcon />
                                </button>
                            </button>
                        </li>
                    </ul>

                    <div id='nav-dropdown' className='bg-zinc-900 w-screen left-0 fixed h-0 top-0 z-20 shadow-lg mt-[4rem]'>
                        <ul className='flex flex-col justify-center place-items-center align-middle'>
                            <a href="/#" className='hover-underline-animation text-accent-green'><li className='pl-8 pr-8 p-2 mt-2 list-none headerLink'>Home</li></a>
                            <a href="/#stats" className='hover-underline-animation !delay-[100ms] text-accent-pink'><li className='pl-8 pr-8 p-2 mt-2 list-none headerLink'>Stats</li></a>
                            <a href="/#projects" className='hover-underline-animation !delay-[200ms] text-accent-green'><li className='pl-8 pr-8 p-2 mt-2 list-none headerLink'>Projects</li></a>
                            <a href="/#contact" className='hover-underline-animation !delay-[300ms] text-accent-pink'><li className='pl-8 pr-8 p-2 mt-2 list-none headerLink'>Contact</li></a>
                        </ul>
                    </div>

                </nav>
            </div>
        </>

    )

}

export default NavBar