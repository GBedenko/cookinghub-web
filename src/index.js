// Import React and React Router
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import * as serviceWorker from './serviceWorker'

// Import CSS
import './index.css'

// Import App sub-component (which entire application is set to)
import App from'./App'

// Top level component is the App set to the 'root' HTML div tag
ReactDOM.render(<Router>
	<Route path="/" component={App}/>
</Router>, document.getElementById('root')
)

serviceWorker.unregister()
