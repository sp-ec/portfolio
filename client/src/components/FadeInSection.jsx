import React, { Component } from 'react'
import { useState, useEffect } from 'react'

const FadeInSection = ({children}) => {

    const handleScroll = () => {
        setScrollHeight(window.scrollY)
        if (scrollHeight > children.heig) {
            console.log('Fade in')
        }
    }

    const [scrollHeight, setScrollHeight] = useState([{}])

    useEffect(() => {
        console.log(children.scrollHeight)
        window.addEventListener('scroll', () => {
            handleScroll()
        }, { passive: true })
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })  

    return (
      <div>
        {children}
      </div>
    )
  
}

export default FadeInSection