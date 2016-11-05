import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Main from './components/Main'
import GetWeatherContainer from './containers/GetWeatherContainer'
import Forecast from './components/Forecast'

const Root = () => {
    return (
        <Router history={hashHistory}>
            <Route path='/' component={Main}>
                <IndexRoute header='Enter City' component={GetWeatherContainer} />
                <Route path='/forecast' component={Forecast} />
                <Route path='/detail' />
            </Route>
        </Router>
    )
}

render(<Root />, document.getElementById("app"))
