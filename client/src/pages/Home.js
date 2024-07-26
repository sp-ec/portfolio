import '../App.css'
import Header from '../components/Header'
import LastPlayedSong from '../stats/LastPlayedSong'
import EmailIcon from '../icons/EmailIcon'
import GithubIcon from '../icons/GithubIcon.jsx'
import Weather from '../stats/Weather.jsx'
import LinkedinIcon from '../icons/LinkedinIcon.jsx'
import Github from '../stats/Github.jsx'
import NavBar from '../components/NavBar'

import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'


function Home() {

  const { ref: projects1, inView: projects1Visible } = useInView({
    threshold: 0.75,
    triggerOnce: true
  });

  const { ref: statsHeader, inView: statsHeaderVisible } = useInView({
    threshold: 0.75,
    triggerOnce: true
  });

  const { ref: stats1, inView: stats1Visible } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  const { ref: stats2, inView: stats2Visible } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  const { ref: stats3, inView: stats3Visible } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  return (
    <>
      <Header />
      <NavBar />
      <div className='text-container'>
        <h2 className='p-8 mt-24'>Welcome</h2>
        <p>My name is Noah, I'm a programmer and game developer. This is where I'll be posting about my projects and providing a window into my life.
          Feel free to look around, and dont be afraid to contact me if you have any questions.</p>

        <h2 className='p-8'>About Me</h2>
        <p>I live near Washington D.C., USA and attend a local college. I'm currently pursuing a bachelor's in Computer Science with plans to get a master's in the future.</p>
        <p className='mt-8'>I've used many languages, but I primarily use C# for game development and Javascript for web development.</p>
        <p className='mt-8 mb-8'>When I'm not programming, I'm usually hanging out with my friends, travelling, practicing bass guitar or finding new indie games to play.</p>

      </div>


      <div className='blue-bg'>
        <div className={projects1Visible ? 'scroll-fade-in' : 'scroll-fade-out'} ref={projects1}>
          <div className='text-container'>
            <h2 className='p-8' id='projects'>Projects</h2>
            <p className='opacity-100'>
              There isn't much here yet, but I'm working on a big project that I'm excited to share soon. Stay tuned!
            </p>
          </div>
        </div>
      </div>

      <div className='text-container'>

        <div className={statsHeaderVisible ? 'scroll-fade-in' : 'scroll-fade-out'} ref={statsHeader}>
          <h2 className='p-8' id='stats'>Stats</h2>
        </div>

        <div className='flex row flex-wrap justify-around'>

          <div className='basis-1/4 flex-grow order-3'>
            <div className={stats1Visible ? 'scroll-fade-in' : 'scroll-fade-out'} ref={stats1}>
              <LastPlayedSong />
            </div>
          </div>

          <div className='basis-1/3 flex-grow order-3'>
            <div className={stats2Visible ? 'scroll-fade-in-delay-250' : 'scroll-fade-out'} ref={stats2}>
              <Github />
            </div>
          </div>

          <div className='basis-1/4 flex-grow order-2'>
            <div className={stats3Visible ? 'scroll-fade-in-delay-500' : 'scroll-fade-out'} ref={stats3}>
              <Weather />
            </div>
          </div>

        </div >
      </div >

      <div className='blue-bg'>
        <h2 className='p-8' id='contact'>Contact</h2>
        <div className='w-screen -ml-9 left-0 h-16'>
          <ul className='flex justify-center align-middle'>
            <a href='mailto:me@noahmartineau.com' target="_blank" rel="noopener noreferrer"><li className='pl-4 pr-4 p-2 mt-2 list-none hover-underline-animation'>
              <EmailIcon />
            </li></a>
            <a href='https://github.com/sp-ec' target="_blank" rel="noopener noreferrer"><li className='pl-4 pr-4 p-2 mt-2 list-none hover-underline-animation'>
              <GithubIcon />
            </li></a>
            <a href='https://www.linkedin.com/in/noahmart/' target="_blank" rel="noopener noreferrer"><li className='pl-4 pr-4 p-2 mt-2 list-none hover-underline-animation'>
              <LinkedinIcon />
            </li></a>
          </ul>
        </div>
      </div>
      <div className='text-container'>
        <p className='text-sm text-center mt-8'>© 2024 noahmartineau.com. All rights reserved.</p>
      </div>
    </>
  )
}

export default Home
