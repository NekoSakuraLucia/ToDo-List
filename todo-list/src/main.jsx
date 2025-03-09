import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HeroUIProvider, ToastProvider } from '@heroui/react';
import App from './App.jsx';

import './index.css';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <HeroUIProvider>
            <ToastProvider />
            <App />
        </HeroUIProvider>
    </StrictMode>
);
