import '../App.css'
import Header from '../components/Header'
import LastPlayedSong from '../stats/LastPlayedSong'
import EmailIcon from '../icons/EmailIcon'
import GithubIcon from '../icons/GithubIcon.jsx'
import Weather from '../stats/Weather.jsx'
import LinkedinIcon from '../icons/LinkedinIcon.jsx'
import Github from '../stats/Github.jsx'
import NavBar from '../components/NavBar'
import UnityIcon from '../icons/UnityIcon'
import CSharpIcon from '../icons/CSharpIcon.jsx'

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
        <h2 className='p-8'>About Me</h2>
        <p>I live near Washington D.C., USA and am currently pursuing a Bachelor's degree in computer science.<br></br><br></br>

          I'm always picking up new skills, but I'm most experienced developing with C#, Unity, React, Java and Javascript.
          Outside of school, I've been focused mostly on web and game development.<br></br><br></br>

          Besides programming, I also enjoy playing bass, traveling, chatting with my friends and finding new indie games to play.<br></br><br></br>

          If you'd like to get in touch, you can email me <a className='hover-underline-animation text-accent-green' href='mailto:me@noahmartineau.com' target="_blank" rel="noopener noreferrer">here</a>.
        </p>
        <span id='stats'> </span>

      </div>

      <div className='dark-bg'>
        <div className='text-container'>

          <div className={statsVisible ? 'scroll-fade-in' : 'scroll-fade-out'}>
            <h2 className='p-4'>Stats</h2>
          </div>

          <div className='flex row flex-wrap justify-around max-sm:-ml-8'>

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
        <span id='projects'> </span>
      </div>

      <div className='text-container'>
        <h2 className='p-8'>Projects</h2>

        <div className={projects1Visible ? 'slide-left-in' : 'slide-left-out'} ref={projects1}>
          <div className='flex flex-row flex-wrap mt-16 mb-16'>

            <div className='basis-1/3 flex-grow flex-shrink-0 mr-8 ml-8 mb-16 flex justify-center min-w-64  h-fit shadow-2xl'>
              <a href='https://claireecho.itch.io/bit-keeper' target="_blank" rel="noopener noreferrer" className={projects1Visible ? 'project-box-shadow-on' : 'project-box-shadow-off'} ref={projects1}>
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

            <div className='basis-1/3 flex-grow mr-8 ml-8 sm:min-w-96'>
              <h3 className='pb-4'>Bit Keeper</h3>
              <p>
                I made this small game along with a teammate for a 36-hour hackathon at my university.
                This was my first ever completed game, and while I wish I had time to expand upon it, I am happy with the final result.
              </p>
              <div className='mt-4 flex flex-row'>
                <UnityIcon />
                <CSharpIcon />
              </div>
            </div>

          </div>
        </div>

        <p className='text-center text-lg mb-8'>Curious about how I made this website? It was made using NodeJS, React and Tailwind CSS.</p>

      </div>

      <div className='text-container flex flex-row webring w-1/2'>
        <div className='webring-cluster flex flex-row justify-center flex-grow'>
          <a href="https://noahmartineau.com/" ><img src="images/button.png"></img></a>
          <img src="gifs/firefoxnow.gif"></img>
          <a href="https://fl1nt.dev" ><img src="https://fl1nt.dev/images/mybutton.gif"></img></a>
          <a href="https://store.steampowered.com/" ><img src="gifs/steam.gif"></img></a>
          <a href="https://cdn.fl1nt.dev" ><img src="https://fl1nt.dev/images/buttons/cdn.gif"></img></a>
          <a href="https://www.kz-n.net/" ><img src="https://www.kz-n.net/public/88x31.png"></img></a>
          <img src="gifs/cssdif.gif"></img>
          <a href="https://discordapp.com/users/244925941036351489" ><img src="gifs/discord_now.gif"></img></a>
          <img src="gifs/undercon.gif"></img>
          <a href="https://notepad-plus-plus.org/" ><img src="gifs/notepadpp3.gif"></img></a>
          <img src="gifs/hatemac_b.gif"></img>
        </div>
      </div >

      <div className='dark-bg'>
        <h2 className='p-8' id='contact'>Contact</h2>
        <div className='w-screen left-0 h-16 mb-8 -ml-6'>
          <ul className='flex flex-row justify-center align-middle'>
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
