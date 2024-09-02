import React, { useEffect, useState } from 'react'

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
        <div className='bg-accent-green bg-opacity-0  m-4 p-6 h-64'>
            <h3 className='mb-4 pink-green-title text-lg'>Recent Listening</h3>
            {(typeof song.name != 'undefined') ? (
                <div>
                    <div className='flex-row flex max-h-30 min-w-56'>
                        <a href={song.url} target="_blank" rel="noopener noreferrer">
                            <img src={song.image[3]['#text']} alt='Album Art' className="min-w-20 h-20" />
                        </a>
                        <div className='ml-3'>
                            <p className='text-lg leading-7 mt-1 line-clamp-3 text-accent-green'>{song.artist['#text']} - {song.name}</p>
                        </div>
                    </div>
                    {(typeof song.date == 'undefined') ? (
                        <div className='flex-row flex place-items-center mt-5'>
                            <img src={require('../photos/vinyl.png')} a="spinning vinyl" className='w-5 animate-spin'></img>
                            <p className='text-xs opacity-40 ml-2'>Currently Listening</p>
                        </div>
                    ) : (
                        <div className='flex-row flex place-items-center mt-5'>
                            <img src={require('../photos/vinyl.png')} a="spinning vinyl" className='w-5'></img>
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