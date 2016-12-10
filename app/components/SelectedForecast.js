import React from 'react'
import { getWeatherIcons } from '../utils/getWeatherIcons'
import Moment from 'moment'

class SelectedForecast extends React.Component {
    constructor() {
        super()
        this.state = {
            icon: '10d',
            hi: 'n/a',
            lo: 'n/a',
            description: 'n/a',
            day: 'n/a',
            speed: 'n/a',
            humidity: 'n/a'
        }
    }
    componentDidUpdate(e) {
        let weather = this.props.weatherSingle
        let change = weather.temp.max
        if (this.state.hi === change)
            return;
        else
            this.setState({
                icon: weather.weather[0].icon,
                hi: weather.temp.max,
                lo: weather.temp.min,
                description: weather.weather[0].description,
                day: weather.dt,
                speed: weather.speed,
                humidity: weather.humidity
            })
    }
    render() {
        let dayName = Moment(this.state.day * 1000).format('dddd')

        return (
            <div className='single-weather'>
                <h2>{this.props.city}</h2>
                <h4>{dayName}</h4>
                <div className='single-weather-layout'>
                    <div>
                        <h1 className={getWeatherIcons(this.state.icon)}></h1>
                        <p>Conditions: {this.state.description}</p>
                    </div>
                    <div className='single-weather-info'>
                        <p>Low: {this.state.lo}</p>
                        <p>High: {this.state.hi}</p>
                        <p>Speed: {this.state.speed} mph</p>
                        <p>Humidity: {this.state.humidity}%</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default SelectedForecast
