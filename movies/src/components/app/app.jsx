import React from 'react'
import {Component} from 'react'
import Header from './../header/header.jsx'
import Drawer from './../drawer/drawer.jsx'
import Main from './../main/main.jsx'

class App extends Component {

    componentDidMount() {
        let componentHandler = require('exports-loader?componentHandler!material-design-lite/material');
        componentHandler.upgradeDom();
    }

    render() {
        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <Header/>
                <Drawer/>
                <Main/>
            </div>
        )
    }
}

export default App