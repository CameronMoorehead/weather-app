import React from 'react'
import { getWeatherIcons } from '../utils/getWeatherIcons'
import Moment from 'moment'

class WeekForecast extends React.Component {
    render() {
        return (
            <div className='week-weather-container'>
                {this.props.weatherAll.map(function(weather, i) {
                    return <a className='week-weather' id={i} key={i} onClick={this.props.onClickForecast}>
                            <p className='date'>{Moment(weather.dt * 1000).format('dddd')}</p>
                            <h1 className={getWeatherIcons(weather.weather[0].icon)}></h1>
                            <div className='week-temp'>
                                <p><span style={{color: '#34495E'}}>Low:</span> {weather.temp.min}°</p>
                                <p><span style={{color: '#E74C3C'}}>High:</span> {weather.temp.max}°</p>
                            </div>
                            <p className='week-desc'>{weather.weather[0].description}</p>
                    </a>
                }.bind(this))}
            </div>
        )
    }
}

export default WeekForecast
