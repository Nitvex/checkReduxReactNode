import React, {Component} from 'react';

import {Link} from "react-router-dom";

class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        let requestOptions = {
            method: 'GET',
            headers: new Headers(),
            mode: 'cors',
            cache: 'default'
        };
        fetch('http://127.0.0.1:3000/products', requestOptions).then((response) => {
            return response.json();
        }).then((products) => {
            console.log(products);
            this.setState({products:products});
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
                <ul>
                    {this.state.products.map((p) => {
                        return <li key={p.name}>{p.name} cost(s) {p.cost}</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default Products;
