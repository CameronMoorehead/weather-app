import React from 'react'
import { getWeatherIcons } from '../utils/getWeatherIcons'
import Moment from 'moment'

class WeekForecast extends React.Component {
    render() {
        return (
            <div className='week-weather-container'>
                {this.props.weatherAll.map(function(weather, i) {
                    return <a className='week-weather' id={i} key={i} onClick={this.props.onClickForecast}>
                            <p>{Moment(weather.dt * 1000).format('dddd')}</p>
                            <h1 className={getWeatherIcons(weather.weather[0].icon)}></h1>
                            <p>{weather.temp.min}-{weather.temp.max} degrees</p>
                            <p>{weather.weather[0].description}</p>
                    </a>
                }.bind(this))}
            </div>
        )
    }
}

export default WeekForecast
