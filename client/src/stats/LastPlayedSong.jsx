import React, { Component, useEffect, useState } from 'react'

const LastPlayedSong = () => {

    const [song, setSong] = useState([{}])
    let seconds = 0;
    if (typeof song.date != 'undefined') {
        seconds = Date.now() / 1000 - song.date.uts
    }

    useEffect(() => {
        console.log('Fetching data from backend...')
        fetch('/music/lastplayed')
            .then(response => response.json())
            .then(data => {
                setSong(data.recenttracks.track[0])
            })
    }, [])

    return (
        <div className=' bg-zinc-900 m-4 p-6 h-52'>
            <h3 className='mb-4'>Recent Listening</h3>
            {(typeof song.name != 'undefined') ? (
                <div>
                    <div className='flex-row flex max-h-30'>
                        <a href={song.url} target="_blank" rel="noopener noreferrer">
                            <img src={song.image[3]['#text']} alt='Album Art' className="min-w-20 h-20" />
                        </a>
                        <div className='ml-3'>
                            <p className='stat-h1 leading-7 mt-1 text-xl'>{song.artist['#text']}</p>
                            <p className='text-xs opacity-70 mt-1 overflow-hidden overflow-ellipsis line-clamp-1'>{song.name}</p>
                        </div>
                    </div>
                    {(typeof song.date == 'undefined') ? (
                        <div className='flex-row flex place-items-center mt-5'>
                            <img src={require('../photos/vinyl.png')} className='w-5 animate-spin'></img>
                            <p className='text-xs opacity-40 ml-2'>Currently Listening</p>
                        </div>
                    ) : (
                        <div className='flex-row flex place-items-center mt-3'>
                            <img src={require('../photos/vinyl.png')} className='w-5'></img>
                            {(seconds < 3600) ? (
                                <p className='text-xs opacity-40 ml-2'>Played {Math.floor(seconds / 60)} minute(s) ago</p>
                            ) : (
                                <p className='text-xs opacity-40 ml-2'>Played {Math.floor(seconds / 3600)} hour(s) ago</p>
                            )}
                        </div>
                    )}

                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default LastPlayedSong