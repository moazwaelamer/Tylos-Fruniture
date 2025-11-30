import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Main CSS
import './index.css';



import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <App />   // ❌ بدون StrictMode
);

// Performance report
reportWebVitals();
