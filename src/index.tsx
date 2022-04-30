import React from 'react';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import App from './adapters/primary/App';
import store from './redux/Store';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
    <Provider store={store}>
        <App />
    </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(cnsole.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
