import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {IntercomProvider} from 'react-use-intercom';

const INTERCOM_APP_ID = 'a8p2mvpt';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <IntercomProvider appId={INTERCOM_APP_ID}>
            <App/>
        </IntercomProvider>

    </React.StrictMode>
);