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
                <div className='basis-1/2 flex flex-row flex-grow z-10 flex-shrink min-w-48 max-w-72 min-h-48 max-h-72 m-8 max-sm:mt-6 max-sm:max-w-none max-sm:max-h-none md:max-w-64 md:max-h-64 md:min-h-64 sm:max-w-48 sm:min-h-48 sm:max-h-48 sm:bg-zinc-900 max-sm:bg-none'>
                    <img src={require('../photos/me_500x500.png')} className={titleVisible ? 'project-box-shadow-on' : 'project-box-shadow-off'}></img>
                </div>
                <div className='basis-1/5 flex-grow max-w-2xl flex flex-col max-sm:mb-4 max-sm:text-4xl max-sm:ml-8 sm:ml-4 sm:text-2xl md:ml-6 md:text-4xl lg:ml-8 lg:text-7xl mr-8 sm:mt-8'>
                    <div id='title1' className={titleVisible ? 'translate-x-0 transition-all duration-1000 opacity-100 ease-in-out ' : '-translate-x-1/2 duration-1000 opacity-0'} ref={title}>
                        <h1 className='relative top-0 tracking-widest text-left z-10 text-zinc-200 title-text'>NOAH</h1>
                    </div>

                    <div id='title2' className={titleVisible ? 'translate-x-0 transition-all duration-1000 opacity-100 ease-in-out' : '-translate-x-1/2 duration-1000 opacity-0'} ref={title}>
                        <h1 className='relative top-0 tracking-widest text-left z-10 text-zinc-200 title-text'>MARTINEAU</h1>
                    </div>

                    <div className={titleVisible ? 'transition-all duration-1000 opacity-100 ease-in-out delay-700' : 'duration-1000 opacity-0'} ref={title}>
                        <p className='mt-6 leading-8 sm:text-base md:text-xl'>
                            Hey there! My name is Noah. I'm a programmer, game developer and student.
                            This is where I will be showcasing my projects and anything else I think is interesting.
                        </p>
                    </div>

                </div>

            </div>
        </div>
    )
}
