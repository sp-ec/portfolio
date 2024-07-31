import React from 'react'
import HeaderBG from './HeaderBG'
import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'


export default function Header() {

    const { ref: title, inView: titleVisible } = useInView({
        threshold: 0,
        triggerOnce: true
    });

    useEffect(() => {
        setTimeout(() => {
            document.getElementById('title1').classList.add('transition-none');
            document.getElementById('title2').classList.add('transition-none');
        }, 1000)
    }, [])

    return (
        <div className='bg-zinc-900 bg-opacity-90 w-screen -ml-4 -mt-4 pb-6 pt-8 z-50'>
            <div className='flex md:flex-row max-sm:flex-col-reverse justify-center'>
                <div className='basis-1/2 flex flex-row flex-grow z-10 flex-shrink-0 min-w-48 max-w-72 max-h-72 max-sm:mt-6 max-sm:max-w-none max-sm:max-h-none m-8'>
                    <img src={require('../photos/me.png')} className={titleVisible ? 'project-box-shadow-on' : 'project-box-shadow-off'}></img>
                </div>
                <div className='basis-1/5  flex flex-col max-sm:mb-4 max-sm:text-4xl max-sm:ml-8 sm:ml-4 sm:text-2xl md:ml-6 md:text-4xl lg:ml-8 lg:text-7xl mr-8 sm:mt-8'>
                    <div id='title1' className={titleVisible ? 'translate-x-0 transition-all duration-1000 opacity-100 ease-in-out ' : '-translate-x-2/3 duration-1000 opacity-0'} ref={title}>
                        <h1 className='relative top-0 tracking-widest text-left z-10 text-zinc-200 title-text'>NOAH</h1>
                    </div>

                    <div id='title2' className={titleVisible ? 'translate-x-0 transition-all duration-1000 opacity-100 ease-in-out' : '-translate-x-2/3 duration-1000 opacity-0'} ref={title}>
                        <h1 className='relative top-0 tracking-widest text-left z-10 text-zinc-200 title-text'>MARTINEAU</h1>
                    </div>
                </div>

            </div>
        </div>
    )
}
