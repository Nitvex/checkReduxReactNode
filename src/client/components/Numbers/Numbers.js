import React, {Component} from 'react';

import {Link,Route} from "react-router-dom";

class Numbers extends Component {
    render() {
        return (
            <div className="numbers">
                Numbers
                <br/>
                <Link to="/">to Main</Link>
                <br/>
                <Link to="/products">Products</Link>
            </div>
        );
    }
}

export default Numbers;
