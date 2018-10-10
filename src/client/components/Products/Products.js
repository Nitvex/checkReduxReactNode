import React, {Component} from 'react';

import {Link} from "react-router-dom";

class Products extends Component {

    componentDidMount() {
        let requestOptions = {
            method: 'GET',
            headers: new Headers(),
            mode: 'cors',
            cache: 'default'
        };
        fetch('http://127.0.0.1:3000/products', requestOptions).then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data);
        });

    }

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
