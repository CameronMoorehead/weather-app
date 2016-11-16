const id = 'c67db20a5c4fc00e6c7ca20ec59ff6f3'
const url = 'http://api.openweathermap.org/data/2.5'

const fetchWeather = function(city) {
    let forecast = `${url}/forecast/daily?q=${city}&units=imperial&cnt=67&appid=${id}`

    return fetch(forecast).then((response) => response.json())
}

export { fetchWeather }
