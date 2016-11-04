import React from 'react'
import GetWeatherContainer from '../containers/GetWeatherContainer'

class Enter extends React.Component {
    render() {
        return (
            <div className="text-center">
                <h1>Enter a City and State</h1>
                <GetWeatherContainer />
            </div>
        )
    }
}

export default Enter
