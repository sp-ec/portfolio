const express = require('express')
//const cors = require('cors');

const app = express()
//app.use(cors());



app.use((req, res, next) => {
    //res.header("Access-Control-Allow-Origin", "*");
    //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    const allowedHosts = ['client-production-1986.up.railway.app', 'localhost', 'noahmartineau.com'];
    const host = req.headers.host;
    if (allowedHosts.includes(host)) {
        next();
    } else {
        console.log('Invalid Host');
        res.status(403).send('Invalid Host');
    }
});

let forecastData;
let githubUserData;
let githubReposData;
let musicData;

app.get("/music/lastplayed", (req, res) => {
    res.json(musicData)
})

app.get("/weather/forecast", (req, res) => {
    res.json(forecastData)

})

app.get("/github/user", (req, res) => {
    res.json(githubUserData)
})

app.get("/github/repos", (req, res) => {
    res.json(githubReposData)
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const fetchLastPlayed = async () => {
    console.log('Fetching data from Last.fm...')
    const response = await fetch(
        'https://ws.audioscrobbler.com/2.0/?api_key=' + process.env.LASTFM_API_KEY + '&method=User.getrecenttracks&user=noahmartineau&format=json&limit=1'
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
            'Authorization': 'Bearer ' + process.env.GITHUB_TOKEN,
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
            'Authorization': 'Bearer ' + process.env.GITHUB_TOKEN,
            'X-GitHub-Api-Version': '2022-11-28'
        }
    }
    )
    const data = await response.json()
    console.log('Github repos fetched:', data)
    return data;
}

fetchAPIData = async () => {
    forecastData = await fetchWeather();
    githubUserData = await fetchGithubUser();
    githubReposData = await fetchGithubRepos();
    musicData = await fetchLastPlayed();
}

fetchAPIData();

setInterval(function () {
    fetchAPIData();
}, 900000)