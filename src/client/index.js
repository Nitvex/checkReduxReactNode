import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import Numbers from './components/Numbers/Numbers';
import Products from './components/Products/Products';

import {HashRouter as Router, Route,Switch} from "react-router-dom";


ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/products" component={Products}/>
            <Route path="/numbers" component={Numbers}/>
        </Switch>
    </Router>
    ,
    document.getElementById('root'));

