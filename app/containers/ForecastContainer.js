import React from 'react'
import Forecast from '../components/Forecast'
import { getSingleDayForecast, getFiveDayForecast } from '../utils/openWeatherHelpers'

class ForecastContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            weatherData: ""
        }
    }

    componentDidMount() {
        getFiveDayForecast(this.props.routeParams.city)
            .then(function(info) {
                const day = info.data.list
                this.setState({
                    weatherData: [
                        day[0],
                        day[1],
                        day[2],
                        day[3],
                        day[4]
                    ]
                })
            }.bind(this))
    }

    render() {
        return (
            <Forecast
                weatherData={this.props.routeParams.city}
            />
        )
    }
}

export default ForecastContainer
