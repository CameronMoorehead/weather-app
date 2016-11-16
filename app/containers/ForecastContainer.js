import React from 'react'
import Forecast from '../components/Forecast'

import { fetchWeather } from '../utils/fetchWeather'

class ForecastContainer extends React.Component {
    constructor() {
        super()
        this.getWeather = this.getWeather.bind(this)
    }
    getWeather() {
        return console.log(fetchWeather(this.props.params.city).then((response) => response.list))
    }
    render() {
        return (
            <Forecast
                city={this.props.params.city}
                weather={this.getWeather()}
            />
        )
    }
}

export default ForecastContainer
