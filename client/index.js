import React from 'react'
import ReactDOM from 'react-dom'
import {Router} from 'react-router-dom'
import history from './history'
import App from './app'

// // establishes socket connection
// import './socket'

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('app')
)

// ReactDOM.render(<h1>HELLO</h1>, document.getElementById('app'))
