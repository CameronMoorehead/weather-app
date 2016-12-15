import React from 'react'
import { getWeatherIcons } from '../utils/getWeatherIcons'
import Moment from 'moment'

class SelectedForecast extends React.Component {
    render() {
        return (
            <div className='single-weather'>
                {this.props.weatherSingle.map(function(weather, i) {
                    return <div key={i}>
                        <h2>{this.props.city}</h2>
                        <h4>{Moment(weather.dt * 1000).format('dddd')}</h4>
                        <div className='single-weather-layout'>
                            <div>
                                <h1 className={getWeatherIcons(weather.weather[0].icon)}></h1>
                                <p>Conditions: {weather.weather[0].description}</p>
                            </div>
                            <div className='single-weather-info'>
                                <p>Low: {weather.temp.min}</p>
                                <p>High: {weather.temp.max}</p>
                                <p>Speed: {weather.speed}</p>
                                <p>Humidity: {weather.humidity}</p>
                            </div>
                        </div>
                    </div>
                }.bind(this))}
            </div>
        )
    }
}

export default SelectedForecast
