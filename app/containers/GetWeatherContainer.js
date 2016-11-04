import React from 'react'
import GetWeather from '../components/GetWeather'
import { getFiveDayForecast, getSingleDayForecast } from '../utils/openWeatherHelpers'

class GetWeatherContainer extends React.Component {
    constructor() {
        super()
        this.handleSubmitCity = this.handleSubmitCity.bind(this)
        this.handleUpdateCity = this.handleUpdateCity.bind(this)
        this.state = {
            city: {},
        }
    }

    handleSubmitCity(e) {
        return getSingleDayForecast(this.state.city)
    }

    handleUpdateCity(e) {
        this.setState({
            city: e.target.value
        })
    }

    render() {
        return (
            <GetWeather
                onSubmitCity={this.handleSubmitCity}
                onUpdateCity={this.handleUpdateCity}
            />
        )
    }
}

export default GetWeatherContainer
