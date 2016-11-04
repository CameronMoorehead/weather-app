import React from 'react'

class GetWeather extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.onSubmitCity} >
                    <input
                        type="text"
                        placeholder="City, State"
                        onChange={this.props.onUpdateCity} />
                    <button className="btn btn-lg btn-default btn-success">
                        Get Weather
                    </button>
                </form>
            </div>
        )
    }
}

export default GetWeather
