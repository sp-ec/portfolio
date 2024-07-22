import './App.css'
import Header from './Header'
import LastPlayedSong from './LastPlayedSong'
import EmailIcon from './EmailIcon'
import GithubIcon from './GithubIcon.jsx'
import Weather from './Weather.jsx'
import { useState, useEffect } from 'react'
import LinkedinIcon from './LinkedinIcon.jsx'
import Github from './Github.jsx'


function Home() {
  return (
    <>
      <Header />
      <div className='bg-zinc-700 w-screen left-0 absolute h-16 -mt-6'>
        <nav>
          <ul className='flex justify-center align-middle'>
            <a href="#" className='hover-underline-animation'><li className='pl-8 pr-8 p-2 mt-2 list-none headerLink'>Home</li></a>
            <a href="#projects" className='hover-underline-animation'><li className='pl-8 pr-8 p-2 mt-2 list-none headerLink'>Projects</li></a>
            <a href="#stats" className='hover-underline-animation'><li className='pl-8 pr-8 p-2 mt-2 list-none headerLink'>Stats</li></a>
            <a href="#contact" className='hover-underline-animation'><li className='pl-8 pr-8 p-2 mt-2 list-none headerLink'>Contact</li></a>
          </ul>
        </nav>
      </div>
      <div id='navSpace'></div>
      <div className='text-container'>
        <h2 className='p-8 mt-8'>Welcome</h2>
        <p>My name is Noah, I'm a programmer and game developer. This is where I'll be posting about my projects and providing a window into my life.
          Feel free to look around, and dont be afraid to contact me if you have any questions.</p>
        <h2 className='p-8'>About Me</h2>
        <p>I live near Washington D.C., USA and attend a local college. I'm currently pursuing a bachelor's in Computer Science with plans to get a master's in the future.</p>
        <p className='mt-8'>I've used many languages, but I primarily use C# for game development and Javascript for web development.</p>
        <p className='mt-8 mb-8'>When I'm not programming, I'm usually hanging out with my friends, travelling, practicing bass guitar or finding new indie games to play.</p>
      </div>


      <div className='blue-bg'>
        <div className='text-container'>
          <h2 className='p-8' id='projects'>Projects</h2>
          <p className='opacity-100'>
            There isn't much here yet, but I'm working on a big project that I'm excited to share soon. Stay tuned!
          </p>
        </div>

      </div>

      <div className='text-container'>
        <h2 className='p-8' id='stats'>Stats</h2>
        <div className='flex row flex-wrap justify-around'>
          <div className='p-4 m-2 bg-zinc-900 basis-1/4 flex-grow'>
            <h3>Recent Listening</h3>
            <LastPlayedSong />
          </div>
          <div className='p-4 m-2 bg-zinc-900 basis-1/3 flex-grow'>
            <h3>Github</h3>
            <Github />
          </div>
          <div className='p-4 m-2 bg-zinc-900 basis-1/4 flex-grow'>
            <h3>Weather (Washington, D.C.)</h3>
            <Weather />
          </div>
        </div>
      </div>

      <div className='blue-bg'>
        <h2 className='p-8' id='contact'>Contact</h2>
        <div className='w-screen -ml-9 left-0 h-16'>
          <ul className='flex justify-center align-middle'>
            <a href='mailto:noahmartineau8@gmail.com' target="_blank" rel="noopener noreferrer"><li className='pl-4 pr-4 p-2 mt-2 list-none hover-underline-animation'>
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
