import React from 'react'

class GetWeather extends React.Component {
    render() {
        return (
            <div className="text-center">
                <h1>{this.props.header}</h1>
                <form onSubmit={this.props.onSubmitCity} >
                    <input
                        type="text"
                        placeholder="City, State"
                        onChange={this.props.onUpdateCity}
                        style={{marginRight:'5px'}}
                    />
                    <button className="btn btn-lg btn-default btn-success margins">
                        Get Weather
                    </button>
                </form>
            </div>
        )
    }
}

export default GetWeather
