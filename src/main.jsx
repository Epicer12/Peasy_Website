import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AppV1 from './v1/Page.jsx'
import AppV2 from './v2/AppV2.jsx'
import './index.css'

const isV2 = window.location.search.includes('v=2');
const isV1 = window.location.search.includes('v=1');

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {isV2 ? <AppV2 /> : isV1 ? <AppV1 /> : <App />}
    </React.StrictMode>,
)
