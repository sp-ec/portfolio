import React, { useEffect, useState } from 'react'

const Github = () => {

    const [user, setUser] = useState([{}])
    const [repos, setRepos] = useState([{}])

    useEffect(() => {
        console.log('Fetching data from backend...')
        fetch('http://noahmartineau.com/github/user')
            .then(response => response.json())
            .then(data => {
                setUser(data)
                console.log("User data fetched:", data)
            })
        fetch('http://noahmartineau.com/github/repos')
            .then(response => response.json())
            .then(data => {
                setRepos(data)
                console.log("Repo data fetched:", data)
            })
    }, [])

    return (
        <div className='bg-accent-pink bg-opacity-0 m-4 p-6 h-64'>
            <h3 className='mb-4 pink-green-title text-lg'>Github</h3>
            {(typeof user.id != 'undefined') ? (
                <div>
                    <div className='flex-row flex max-h-30 min-w-56'>
                        <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                            <img src={user.avatar_url} alt='Github Avatar' className="min-w-20 h-20" />
                        </a>
                        <div className='ml-3'>
                            <p className='stat-h1 leading-7 mt-1 text-xl'>{user.public_repos} Public Repositories</p>
                            <div className='flex flex-row justify-start flex-wrap max-w-80 max-h-14 overflow-hidden'>
                                {repos.map((repo, index) => (
                                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" key={index}>
                                        <div className='mr-2'>
                                            {repos[1] != null ? <p className='stat-h2 text-xs opacity-70 mt-1 text-nowrap text-accent-green bg-black bg-opacity-50 hover:bg-opacity-75 text-opacity-60 hover:text-opacity-100 p-1 inline-block font-semibold'>{repo.name}</p> : null}
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )
            }
        </div >
    );
};

export default Github