import React from 'react'

class WeekForecast extends React.Component {
    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col-lg-3'>test</div>
                    {this.props.weatherAll.map(function(weather, i) {
                        return <div key={i} id={i} className='col-lg-1' onClick={this.props.onClickForecast}>
                            {weather.deg}
                        </div>
                    }.bind(this))}
                </div>
            </div>
        )
    }
}

export default WeekForecast
