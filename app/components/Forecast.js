import React from 'react'
import 'datejs'


class Forecast extends React.Component {
    constructor() {
        super()
        this.renderWeather = this.renderWeather.bind(this)
    }

    renderWeather(key) {
        const info = this.props.weatherData[key]
        const icon = "http://openweathermap.org/img/w/" + info.weather[0].icon + ".png"
        const day = Date.today().add(parseInt(key)).days().toString("dddd, MMM d")

        return (
            <div key={key}>
                <button
                    className="btn btn-primary"
                    onClick={this.props.onClickCity}
                    style={{marginBottom: "5px", width: "300px"}}
                >
                    <img src={icon} />
                    {day}
                </button>
            </div>
        )
    }

    render() {
        return(
            <div className="text-center">
                <h1>Weather in {this.props.weatherName}:</h1>
                {Object.keys(this.props.weatherData).map(this.renderWeather)}
            </div>
        )
    }
}

export default Forecast
