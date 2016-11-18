import React from 'react'

class WeekForecast extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.onClickForecast}>test</button>
                <div className='weekDays'>
                    {this.props.weatherAll.map(function(weather, i) {
                        return <div key={i} id={i} className='weekDay' onClick={this.props.onClickForecast}>
                            {weather.deg}
                        </div>
                    }.bind(this))}
                </div>
            </div>
        )
    }
}

export default WeekForecast
