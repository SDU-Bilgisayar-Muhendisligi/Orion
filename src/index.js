import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css"
import './index.css';
import App from './App';
import stores from './stores'
import { Provider } from 'react-redux'
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
    .use(Backend)
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        fallbackLng: 'tr',
        debug: true,

        lng: "tr", // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },

        // special options for react-i18next
        // learn more: https://react.i18next.com/components/i18next-instance
        react: {
            wait: true,
        },
    });


ReactDOM.render(
    <React.StrictMode>
        <Provider store={stores}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
