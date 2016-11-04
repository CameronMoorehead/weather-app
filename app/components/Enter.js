import React from 'react'
import GetWeather from './GetWeather'

class Enter extends React.Component {
    render() {
        return (
            <div className="text-center">
                <h1>Enter a City and State</h1>
                <GetWeather />
            </div>
        )
    }
}

export default Enter
