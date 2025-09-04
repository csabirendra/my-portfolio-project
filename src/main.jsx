import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'   // ⚡ Tailwind CSS import yaha hona zaroori hai
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';   


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
