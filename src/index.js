import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {IntercomProvider, useIntercom} from 'react-use-intercom';

const INTERCOM_APP_ID = '55679875';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <IntercomProvider appId={INTERCOM_APP_ID}>
            <App/>
        </IntercomProvider>

    </React.StrictMode>
);