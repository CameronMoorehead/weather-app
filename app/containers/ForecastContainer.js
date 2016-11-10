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
        const data = this.state.weatherData[e.currentTarget.id]
        this.context.router.push({
            pathname: '/detail/' + this.props.routeParams.city,
            query: {
                icon: data.weather[0].icon,
                high: data.temp.max,
                low: data.temp.min,
                desc: data.weather[0].description
            }
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
