import React, { useEffect, useState } from 'react'
import RainCloud from '../icons/RainCloud';
import WindIcon from '../icons/WindIcon';

const Weather = () => {

    const [weather, setWeather] = useState([{}])

    useEffect(() => {
        console.log('Fetching data from backend...')
        fetch('http://localhost:5000/weather/forecast')
            .then(response => response.json())
            .then(data => {
                console.log('Data fetched:', data)
                setWeather(data.properties.periods[0])
            })
    }, [])

    return (
        <div className='bg-accent-pink bg-opacity-0 m-4 p-6 h-64'>
            <h3 className='mb-4 pink-green-title text-lg'>Weather (D.C.)</h3>
            {(typeof weather.name != 'undefined') ? (
                <div>
                    <div className='max-h-30 min-w-56'>
                        <p className='leading-7 mt-1 text-xl line-clamp-2 text-accent-green'>{weather.temperature}° F - {weather.shortForecast}</p>
                        <div className='mt-4 flex-row flex'>
                            <div className='flex-row flex mr-4'>
                                <RainCloud />
                                <p className='text-lg opacity-50 ml-2'>{weather.probabilityOfPrecipitation.value != null ? weather.probabilityOfPrecipitation.value : '0'}%</p>
                            </div>
                            <div className='flex-row flex mr-4'>
                                <WindIcon />
                                <p className='text-lg opacity-50 ml-2'>{weather.windSpeed != null ? weather.windSpeed : '0'}</p>
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

export default Weather