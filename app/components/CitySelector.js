import React from 'react'

class CitySelector extends React.Component {
    newCity(event) {
        event.preventDefault()
        console.log('changing city')
        this.props.changeCity(this.city.value)
    }

    tester(e) {
        e.preventDefault()
        this.props.changeCity(this.city.value)
        this.context.router.push({
            pathname: '/' + this.city.value
        })
    }

    render() {
        return (
            <form ref={(input) => this.cityForm = input} onSubmit={(e) => this.tester(e)}>
                <input  ref={(input) => this.city = input} type='text' defaultValue={this.props.city} />
            </form>
        )
    }
}

CitySelector.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default CitySelector
