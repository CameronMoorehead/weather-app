import React from 'react'
import GetWeather from './GetWeather'

function Main (props) {
        return (
            <div>
                <header className="navbar navbar-default container-fluid">
                    <h1 className="navbar-left">Weather App</h1>
                    <div className="navbar-right">
                        <GetWeather />
                    </div>
                </header>
                {props.children}
            </div>
        )
}

export default Main
