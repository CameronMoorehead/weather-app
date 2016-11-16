import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import GetWeatherContainer from './containers/GetWeatherContainer'

const Root = () => {
    return (
        <Router history={browserHistory}>
            <Route path='/'>
                <IndexRoute header='Enter City' component={GetWeatherContainer} />
                <Route path='/:city'  />
                <Route path='/:city/detail'  />
            </Route>
        </Router>
    )
}

render(<Root />, document.getElementById("app"))
