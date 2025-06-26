import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './component/App';
import './css/index.css';


createRoot(document.getElementById('main-root')).render(
    <App />
)
