import React from 'react'

class CitySelector extends React.Component {
    newCity(e) {
        e.preventDefault()
        this.props.changeCity(this.city.value)
        this.context.router.push({
            pathname: '/' + this.city.value
        })
    }

    render() {
        return (
            <div className='city-selector'>
                <form ref={(input) => this.cityForm = input} onSubmit={(e) => this.newCity(e)}>
                    <input  style={{width: '100%'}} ref={(input) => this.city = input} type='text' defaultValue={this.props.city} />
                </form>
            </div>
        )
    }
}

CitySelector.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default CitySelector
