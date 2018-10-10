import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux";
import App from './components/App/App';
import Numbers from './components/Numbers/Numbers';
import Products from './components/Products/Products';
import store from "./store/index";

import {HashRouter as Router, Route, Switch} from "react-router-dom";


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/products" component={Products}/>
                <Route path="/numbers" component={Numbers}/>
            </Switch>
        </Router>
    </Provider>
    ,
    document.getElementById('root'));

