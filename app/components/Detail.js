import React from 'react'

class Detail extends React.Component {
    constructor() {
        super()
        this.kelvinToFahrenheit = this.kelvinToFahrenheit.bind(this)
    }

    kelvinToFahrenheit(temp) {
                return (1.8 * (temp - 273) + 32)
    }

    render() {
        const ape = this.props.location.query
        return (
            <div className="text-center">
                <img src={"http://openweathermap.org/img/w/" + ape.icon + ".png"} />
                <p>High: {Math.round(this.kelvinToFahrenheit(ape.high))}</p>
                <p>Low: {Math.round(this.kelvinToFahrenheit(ape.low))}</p>
                <p>{ape.desc}</p>
            </div>
        )
    }
}

export default Detail
