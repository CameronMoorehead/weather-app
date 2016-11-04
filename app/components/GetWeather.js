import React from 'react'

class GetWeather extends React.Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleUpdateLocation = this.handleUpdateLocation.bind(this)
        this.state = {
            day: {},
        }
    }

    handleSubmit(e) {
        console.log(this.state.day)
    }

    handleUpdateLocation(e) {
        this.setState({
            day: e.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <input
                        type="text"
                        placeholder="City, State"
                        onChange={this.handleUpdateLocation} />
                    <button className="btn btn-lg btn-default btn-success">
                        Get Weather
                    </button>
                </form>
            </div>
        )
    }
}

export default GetWeather
