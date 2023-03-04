import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { load } from './components/load.js'

window.addEventListener('load', function () {
    load()
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />,
);
