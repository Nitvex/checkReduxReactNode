import React, {Component} from 'react';

import {Link} from "react-router-dom";

class Products extends Component {
    render() {
        return (
            <div className="products">
                Products
                <br/>
                <Link to="/">to Main</Link>
                <br/>
                <Link to="/numbers">Numbers</Link>
            </div>
        );
    }
}

export default Products;
