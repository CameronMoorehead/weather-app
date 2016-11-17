import React from 'react'
import GetWeather from '../components/GetWeather'

class GetWeatherContainer extends React.Component {
    constructor() {
        super()
        this.handleSubmitCity = this.handleSubmitCity.bind(this)
        this.handleUpdateCity = this.handleUpdateCity.bind(this)
        this.state = {
            city: {},
        }
    }

    handleSubmitCity(e) {
        e.preventDefault()
        this.context.router.push({
            pathname: '/' + this.state.city,
        })
    }

    handleUpdateCity(e) {
        this.setState({
            city: e.target.value
        })
    }

    render() {
        return (
            <GetWeather
                onSubmitCity={this.handleSubmitCity}
                onUpdateCity={this.handleUpdateCity}
            />
        )
    }
}

GetWeatherContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default GetWeatherContainer
