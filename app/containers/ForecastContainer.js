import React from 'react'
import WeekForecast from '../components/WeekForecast'
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
        return console.log(e.target.id)
    }

    changeCity(city) {
        console.log('test2')
        this.setState({ city: city })
        this.getWeather(city)
    }

    render() {
        return (
            <div className='row text-center'>
                <WeekForecast
                    weatherAll={this.state.weekWeather}
                    weatherSingle={this.state.selectedWeather} 
                    city={this.state.city}
                    country={this.state.country}
                    onClickForecast={this.handleClickForecast}
                />
                <CitySelector
                    city={this.props.params.city}
                    changeCity={this.changeCity}
                />
            </div>
        )
    }
}


export default ForecastContainer
