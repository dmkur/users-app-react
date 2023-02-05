import React from 'react';
import ReactDOM from 'react-dom/client';

import {App} from './App';
import {BrowserRouter} from "react-router-dom";
import {setupSore} from "./redux";
import {Provider} from "react-redux";

const store = setupSore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>
);

