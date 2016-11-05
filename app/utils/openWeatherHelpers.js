const axios = require('axios')

const id = "c67db20a5c4fc00e6c7ca20ec59ff6f3"

export function getFiveDayForecast(city) {
    return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&type=accurate&APPID=' + id)
}

export function getSingleDayForecast(city) {
    return axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&type=accurate&APPID=' + id)
        .then(function(response) {
            return console.log(response.data.name)
        })
}
