import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BusquedaProvider } from './context/BusquedaContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BusquedaProvider>
    <App />
  </BusquedaProvider>
)
