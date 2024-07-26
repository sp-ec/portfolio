import React, { Component, useEffect, useState } from 'react'

const Github = () => {

    const [user, setUser] = useState([{}])
    const [repos, setRepos] = useState([{}])

    useEffect(() => {
        console.log('Fetching data from backend...')
        fetch('/github/user')
            .then(response => response.json())
            .then(data => {
                setUser(data)
                console.log("User data fetched:", data)
            })
        fetch('/github/repos')
            .then(response => response.json())
            .then(data => {
                setRepos(data)
                console.log("Repo data fetched:", data)
            })
    }, [])

    return (
        <div className=' bg-zinc-900 m-4 p-6 h-52'>
            <h3 className='mb-4'>Github</h3>
            {(typeof user.id != 'undefined') ? (
                <div>
                    <div className='flex-row flex max-h-30 min-w-56'>
                        <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                            <img src={user.avatar_url} alt='Github Avatar' className="min-w-20 h-20" />
                        </a>
                        <div className='ml-3'>
                            <p className='stat-h1 leading-7 mt-1 text-xl'>{user.public_repos} Public Repositories</p>
                            <div className='flex flex-row justify-start flex-wrap max-w-80 max-h-14 overflow-hidden'>
                                <div className='mr-2'>
                                    {repos[0] != null ? <p className='stat-h2 text-xs opacity-70 mt-1 text-nowrap'><a href={repos[0].html_url} target="_blank" rel="noopener noreferrer" className='hover-underline-animation text-blue-400 bg-black p-1'>{repos[0].name}</a></p> : null}
                                </div>
                                <div className='mr-2'>
                                    {repos[1] != null ? <p className='stat-h2 text-xs opacity-70 mt-1 text-nowrap'><a href={repos[1].html_url} target="_blank" rel="noopener noreferrer" className='hover-underline-animation text-blue-400 bg-black p-1'>{repos[1].name}</a></p> : null}
                                </div>
                                <div className='mr-2'>
                                    {repos[2] != null ? <p className='stat-h2 text-xs opacity-70 mt-1 text-nowrap'><a href={repos[2].html_url} target="_blank" rel="noopener noreferrer" className='hover-underline-animation text-blue-400 bg-black p-1'>{repos[2].name}</a></p> : null}
                                </div>
                                <div className='mr-2'>
                                    {repos[3] != null ? <p className='stat-h2 text-xs opacity-70 mt-1 text-nowrap'><a href={repos[3].html_url} target="_blank" rel="noopener noreferrer" className='hover-underline-animation text-blue-400 bg-black p-1'>{repos[3].name}</a></p> : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Github