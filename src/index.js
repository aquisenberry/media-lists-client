import React from 'react'
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import reducers from './redux/reducers'



import App from './App'
import './index.css'
const store = configureStore({ reducer: reducers })
const container = document.getElementById('root');

const root = createRoot(container);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
    
)