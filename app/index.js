import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import './css/styles.css'
import './css/weather-icons/css/weather-icons.css'

import GetWeatherContainer from './containers/GetWeatherContainer'
import ForecastContainer from './containers/ForecastContainer'

const Root = () => {
    return (
        <Router history={hashHistory}>
            <Route path='/'>
                <IndexRoute header='Enter City' component={GetWeatherContainer} />
                <Route path='/:city' component={ForecastContainer} />
            </Route>
        </Router>
    )
}

render(<Root />, document.getElementById("app"))
