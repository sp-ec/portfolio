const express = require('express')

const app = express()

const LASTFM_API_KEY = require('./keys.json').LASTFM_API_KEY;
const GITHUB_TOKEN = require('./keys.json').GITHUB_TOKEN;

app.get("/music/lastplayed", (req, res) => {
    (async () => {
        data = await fetchLastPlayed();
        res.json(data)
    })();

})

app.get("/weather/forecast", (req, res) => {
    (async () => {
        data = await fetchWeather();
        res.json(data)
    })();

})

app.get("/github/user", (req, res) => {
    (async () => {
        const data = await fetchGithubUser();
        res.json(data)
    })();
})

app.get("/github/repos", (req, res) => {
    (async () => {
        const data = await fetchGithubRepos();
        res.json(data)
    })();
})

app.listen(5000, () => {
    console.log("Server is running on port 5000")
})

const fetchLastPlayed = async () => {
    console.log('Fetching data from Last.fm...')
    const response = await fetch(
        'https://ws.audioscrobbler.com/2.0/?api_key=' + LASTFM_API_KEY + '&method=User.getrecenttracks&user=noahmartineau&format=json&limit=1'
    )
    const data = await response.json()
    console.log('Data fetched:', data)
    return data;
}

const fetchWeather = async () => {
    console.log('Fetching weather data...')
    const response = await fetch(
        'https://api.weather.gov/gridpoints/LWX/96,72/forecast'
    )
    const data = await response.json()
    console.log('Weather data fetched:', data)
    return data;
}

const fetchGithubUser = async () => {
    console.log('Fetching github data...')
    const response = await fetch(
        'https://api.github.com/users/sp-ec', {
        headers: {
            'Accept': 'application/vnd.github+json',
            'Authorization': 'Bearer ' + GITHUB_TOKEN,
            'X-GitHub-Api-Version': '2022-11-28'
        }
    }
    )
    const data = await response.json()
    console.log('Github data fetched:', data)
    return data;
}

const fetchGithubRepos = async () => {
    console.log('Fetching github repos...')
    const response = await fetch(
        'https://api.github.com/users/sp-ec/repos', {
        headers: {
            'Accept': 'application/vnd.github+json',
            'Authorization': 'Bearer ' + GITHUB_TOKEN,
            'X-GitHub-Api-Version': '2022-11-28'
        }
    }
    )
    const data = await response.json()
    console.log('Github repos fetched:', data)
    return data;
}