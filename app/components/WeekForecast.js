import React from 'react'

class WeekForecast extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.onClickForecast}>test</button>
            </div>
        )
    }
}

export default WeekForecast
