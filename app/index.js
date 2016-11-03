import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Main from './components/Main'

const Root = () => {
    return (
        <Router history={hashHistory}>
            <Route path='/' component={Main} />
        </Router>
    )
}

render(<Root />, document.getElementById("app"))
