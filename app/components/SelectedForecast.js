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
            })
    }
    render() {
        let dayName = Moment(this.state.day * 1000).format('dddd')

        return (
            <div className='single-weather'>
                <p>{dayName}</p>
                <h1 className={getWeatherIcons(this.state.icon)}></h1>
                <p>Lo: {this.state.lo}</p>
                <p>Hi: {this.state.hi}</p>
                <p>{this.state.description}</p>
            </div>
        )
    }
}

export default SelectedForecast
