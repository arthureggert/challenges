import {render} from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import React from 'react'
import App from './components/app/app.jsx'

render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));
