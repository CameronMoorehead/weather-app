import React from 'react'
import WeekForecast from '../components/WeekForecast'
import SelectedForecast from '../components/SelectedForecast'
import CitySelector from '../components/CitySelector'
import { fetchWeather } from '../utils/fetchWeather'

class ForecastContainer extends React.Component {
    constructor() {
        super()
        this.getWeather = this.getWeather.bind(this)
        this.handleClickForecast = this.handleClickForecast.bind(this)
        this.changeCity = this.changeCity.bind(this)
        this.state = {
            weekWeather: [],
            selectedWeather: {},
            city: '',
            country: ''
        }
    }

    componentWillMount() {
        this.getWeather(this.props.params.city)
    }

    getWeather(cityName) {
            fetchWeather(cityName)
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
        e.stopPropagation()
        if (e.target.id)
            this.setState({ selectedWeather: this.state.weekWeather[e.target.id] })
        else
            this.setState({ selectedWeather: this.state.weekWeather[e.target.parentNode.id]} )
    }

    changeCity(city) {
        this.setState({ city: city })
        this.getWeather(city)
    }

    render() {
        return (
            <div className='weather-main'>
                <div className='weather-container'>
                    <SelectedForecast
                        weatherSingle={this.state.selectedWeather} 
                    />
                    <WeekForecast
                        weatherAll={this.state.weekWeather}
                        city={this.state.city}
                        country={this.state.country}
                        onClickForecast={this.handleClickForecast}
                    />
                </div>
                <CitySelector
                    city={this.props.params.city}
                    changeCity={this.changeCity}
                />
            </div>
        )
    }
}


export default ForecastContainer
