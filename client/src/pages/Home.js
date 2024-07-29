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
import { AutoplayVideo } from "@wethegit/react-autoplay-video"


function Home() {

  const { ref: projects1, inView: projects1Visible } = useInView({
    threshold: 0.35,
    triggerOnce: true
  });


  const { ref: stats, inView: statsVisible } = useInView({
    threshold: 0.35,
    triggerOnce: true,
  });

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches

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
        <span id='projects'> </span>

      </div>


      <div className='blue-bg'>

        <div className='text-container'>
          <h2 className='p-8'>Projects</h2>
          <div className={projects1Visible ? 'slide-left-in' : 'slide-left-out'} ref={projects1}>
            <div className='flex flex-row flex-wrap mt-8 mb-8'>

              <div className='basis-1/3 flex-grow  mr-8 ml-8 mb-16 flex justify-center min-w-96  h-fit shadow-2xl'>
                <a href='https://claireecho.itch.io/bit-keeper' target="_blank" rel="noopener noreferrer">
                  <AutoplayVideo
                    src="videos/BitKeeper.mp4"
                    posterImg="bitkeeper-fallback.png"
                    prefersReducedMotion={prefersReducedMotion}
                    style={{ '--aspect-ratio': 'calc((9 / 16) * 100%)' }}
                    renderReducedMotionFallback={() => (
                      <img src="bitkeeper-fallback.png" alt="Gameplay screenshot." />
                    )}
                  />
                </a>
              </div>

              <div className='basis-1/3 flex-grow mr-8 ml-8'>
                <h3 className='pb-4'>Bit Keeper</h3>
                <p>I made this small game along with a teammate for a 36-hour hackathon at my university. This was my first ever completed game, and while I wish I had time to expand upon it, I am happy with the final result.</p>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className='text-container'>

        <div className={statsVisible ? 'scroll-fade-in' : 'scroll-fade-out'}>
          <h2 className='p-8' id='stats'>Stats</h2>
        </div>

        <div className='flex row flex-wrap justify-around'>

          <div className='basis-1/4 flex-grow order-2'>
            <div className={statsVisible ? 'scroll-fade-in-delay-500' : 'scroll-fade-out'}>
              <LastPlayedSong />
            </div>
          </div>

          <div className='basis-1/3 flex-grow order-3'>
            <div className={statsVisible ? 'scroll-fade-in-delay-750' : 'scroll-fade-out'}>
              <Github />
            </div>
          </div>

          <div className='basis-1/4 flex-grow order-1'>
            <div className={statsVisible ? 'scroll-fade-in-delay-250' : 'scroll-fade-out'} ref={stats}>
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
