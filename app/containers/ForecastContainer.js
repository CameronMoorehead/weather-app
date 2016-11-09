import React from 'react'
import Forecast from '../components/Forecast'
import { getSingleDayForecast, getFiveDayForecast } from '../utils/openWeatherHelpers'

class ForecastContainer extends React.Component {
    constructor() {
        super()
        this.handleClickCity = this.handleClickCity.bind(this)
        this.state = {
            weatherData: ""
        }
    }

    handleClickCity(e) {
        e.preventDefault()
        this.context.router.push({
            pathname: '/detail/' + this.props.routeParams.city
        })
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
                weatherName={this.props.routeParams.city}
                weatherData={this.state.weatherData}
                onClickCity={this.handleClickCity}
            />
        )
    }
}

ForecastContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default ForecastContainer
