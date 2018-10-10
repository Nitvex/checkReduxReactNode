import React, {Component} from 'react';

import './App.css';
import '../Numbers/Numbers';
import '../Products/Products';
import {Link} from "react-router-dom";


class App extends Component {
    render() {
        return (
            <div className="App">
                Hello world!
                <br/>
                <Link to="/numbers">Numbers</Link>
                <br/>
                <Link to="/products">Products</Link>
            </div>
        );
    }
}

export default App;
