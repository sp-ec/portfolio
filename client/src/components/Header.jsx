import React from 'react'
import HeaderBG from './HeaderBG'
import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'


export default function Header() {

    const { ref: title, inView: titleVisible } = useInView({
        threshold: 0,
        triggerOnce: true
    });

    return (
        <div className='bg-zinc-900 bg-opacity-90 w-screen -ml-4 -mt-4 pb-6 pt-8'>
            <div className='text-container'>
                <div className={titleVisible ? 'translate-x-0 transition-all duration-1000 opacity-100 ease-in-out' : '-translate-x-full transition-all duration-1000 opacity-0'} ref={title}>
                    <h1 className='relative top-0 -mt-6 tracking-widest text-left z-10 text-zinc-200'>NOAH </h1>
                </div>

                <div className={titleVisible ? 'translate-x-0 transition-all duration-1000 opacity-100 delay-700 ease-in-out' : '-translate-x-full transition-all duration-1000 opacity-0'} ref={title}>
                    <h1 className='relative top-0 tracking-widest text-left z-10 transition-all text-zinc-200'>MARTINEAU</h1>
                </div>
            </div>
        </div>
    )
}
