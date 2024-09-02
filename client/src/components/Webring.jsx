import React, { Component } from 'react'
import { useEffect, useState } from 'react';

const Webring = () => {

    let cluster1;
    let cluster2
    let id = null;
    let pos1 = 0;
    let pos2 = -500;

    let paused = false;

    const pauseAnimation = () => {
        paused = true;
        console.log('paused')
    }

    const unpauseAnimation = () => {
        paused = false
        console.log('unpaused')
    }

    function frame() {
        console.log(paused)

        pos1++;
        pos2++;
        cluster1.style.right = pos1 + 'px';
        cluster2.style.right = pos2 + 'px';

        if (pos1 === 1000) {
            pos1 = -1000;
        }
        if (pos2 === 1000) {
            pos2 = -1000;
        }
    }


    useEffect(() => {

        cluster1 = document.getElementById('cluster1');
        cluster2 = document.getElementById('cluster2');

        clearInterval(id);
        id = setInterval(frame, 10);

    }, [])


    return (
        <div onMouseEnter={() => pauseAnimation()} onMouseLeave={() => unpauseAnimation()}>
            <div className='text-container flex flex-row webring w-1/2 min-w-96'>
                <div id='cluster1' className='webring-cluster flex flex-row flex-grow'>
                    <a href="https://noahmartineau.com/"   ><img src="images/button.png"></img></a>
                    <img src="gifs/firefoxnow.gif"></img>
                    <a href="https://fl1nt.dev" ><img src="https://fl1nt.dev/images/mybutton.gif"></img></a>
                    <a href="https://store.steampowered.com/" ><img src="gifs/steam.gif"></img></a>
                    <a href="https://cdn.fl1nt.dev" ><img src="https://fl1nt.dev/images/buttons/cdn.gif"></img></a>
                    <img src="gifs/cssdif.gif"></img>
                </div>
                <div id='cluster2' className='webring-cluster flex flex-row flex-grow'>
                    <a href="https://armcord.app/" ><img src="gifs/armcord.gif"></img></a>
                    <a href="https://discordapp.com/users/244925941036351489" ><img src="gifs/discord_now.gif"></img></a>
                    <a href="https://notepad-plus-plus.org/" ><img src="gifs/notepadpp3.gif"></img></a>
                    <a href="https://thebeemc.carrd.co/" ><img src="gifs/thebee.gif"></img></a>
                    <img src="gifs/hatemac_b.gif"></img>
                </div>
            </div >
        </div>
    )

}

export default Webring