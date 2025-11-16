import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'  // optional, can be empty or used for small styles

createRoot(document.getElementById('root')).render(<App />)