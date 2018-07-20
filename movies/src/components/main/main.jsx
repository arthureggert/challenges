import React from 'react'
import About from './../about/about.jsx'
import Home from './../home/home.jsx'
import Library from './../library/library.jsx'
import {Switch, Route} from 'react-router-dom'

const Main = () => {
    return (
        <main className="mdl-layout__content">
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/library' component={Library}/>
            </Switch>
        </main>
    )
}

export default Main