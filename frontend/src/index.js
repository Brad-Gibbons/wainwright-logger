import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FellContextProvider } from './context/FellContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FellContextProvider>
    <App />
    </FellContextProvider>
   
  </React.StrictMode>
);

