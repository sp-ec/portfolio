import React, { Component, useEffect, useState } from 'react'

const Weather = () => {

    const [weather, setWeather] = useState([{}])

    useEffect(() => {
        console.log('Fetching data from backend...')
        fetch('/weather/forecast')
            .then(response => response.json())
            .then(data => {
                console.log('Data fetched:', data)
                setWeather(data.properties.periods[0])
            })
    }, [])

    return (
        <div className=' bg-zinc-900 m-4 p-6  h-52'>
            <h3 className='mb-4'>Weather (D.C.)</h3>
            {(typeof weather.name != 'undefined') ? (
                <div>
                    <div className='flex-row flex max-h-30'>
                        <a href='https://forecast.weather.gov/MapClick.php?lat=38.890370000000075&lon=-77.03195999999997' target="_blank" rel="noopener noreferrer">
                            <img src={weather.icon} alt='Weather Image' className="min-w-20 h-20" />
                        </a>
                        <div className='ml-3'>
                            <p className='stat-h1 leading-5 mt-1 text-xl'>{weather.temperature}° F</p>
                            <p className='stat-h2 text-xs opacity-70 mt-1'>{weather.shortForecast}</p>
                            <p className='stat-h2 text-xs opacity-70 mt-1 max-h-4'>Wind Speed: {weather.windSpeed}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Weather