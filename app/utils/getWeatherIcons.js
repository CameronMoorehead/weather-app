const weatherIcons = {
    '01d' : 'wi wi-day-sunny',
    '02d' : 'wi wi-day-cloudy',
    '03d' : 'wi wi-cloudy',
    '04d' : 'wi wi-day-sunny-overcast',
    '09d' : 'wi wi-day-showers',
    '10d' : 'wi wi-day-rain',
    '11d' : 'wi wi-day-thunderstorm',
    '13d' : 'wi wi-day-snow',
    '55d' : 'wi wi-day-fog',
    '01n' : 'wi wi-night-clear',
    '02n' : 'wi wi-night-alt-cloudy',
    '03n' : 'wi wi-night-cloudy',
    '04n' : 'wi wi-night-partly-cloudy',
    '09n' : 'wi wi-night-alt-showers',
    '10n' : 'wi wi-night-alt-rain',
    '11n' : 'wi wi-night-alt-thunderstorm',
    '13n' : 'wi wi-night-alt-snow',
    '55n' : 'wi wi-night-alt-fog',
}

const getWeatherIcons = function(id) {
   return weatherIcons[id]
}

export { getWeatherIcons }
