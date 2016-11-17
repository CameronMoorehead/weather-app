import React from 'react'
import SelectedForecast from '../components/SelectedForecast'
import WeekForecast from '../components/WeekForecast'
import { fetchWeather } from '../utils/fetchWeather'

class ForecastContainer extends React.Component {
    constructor() {
        super()
        this.getWeather = this.getWeather.bind(this)
        this.handleClickForecast = this.handleClickForecast.bind(this)
        this.state = {
            weekWeather: [],
            selectedWeather: {},
            city: '',
            country: ''
        }
    }

    componentWillMount() {
        this.getWeather()
    }

    getWeather() {
            fetchWeather(this.props.params.city)
            .then((response) => {
                var weather = response.list.map(dayWeather => dayWeather)

                this.setState({
                    weekWeather: weather,
                    selectedWeather: weather[0],
                    country: response.city.country,
                    city: response.city.name
                })
            })
    }

    handleClickForecast(e) {
        return console.log("test")
    }

    render() {
        return (
            <div>
                <SelectedForecast
                    weather={this.state.weekWeather}
                    city={this.state.city}
                    country={this.state.country}
                />
                <WeekForecast
                    weather={this.state.weekWeather}
                    city={this.state.city}
                    country={this.state.country}
                    onClickForecast={this.handleClickForecast}
                />
            </div>
        )
    }
}

export default ForecastContainer
