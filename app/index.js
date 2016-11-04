import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Main from './components/Main'
import Enter from './components/Enter'

const Root = () => {
    return (
        <Router history={hashHistory}>
            <Route path='/' component={Main}>
                <IndexRoute component={Enter} />
                <Route path='/forecast' />
                <Route path='/detail' />
            </Route>
        </Router>
    )
}

render(<Root />, document.getElementById("app"))
