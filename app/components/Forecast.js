import React from 'react'

class Forecast extends React.Component {
    render() {
        return(
            <div>
                <h1>Weather in {this.props.weatherData}</h1>
                <h2>Select a Day:</h2>
            </div>
        )
    }
}

export default Forecast
