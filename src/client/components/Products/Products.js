import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

import {addProduct} from '../../actions/addProduct'

const mapStateToProps = state => {
    return {products: state.products};
};

const mapDispatchToProps = dispatch => {
    return {
        addProduct: product => dispatch(addProduct(product))
    };
};

class connectedProducts extends Component {

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
            products.forEach((product) => {
                this.props.addProduct(product)
            });
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
                    {this.props.products.map((p) => {
                        return <li key={p.name}>{p.name} cost(s) {p.cost}</li>
                    })}
                </ul>
            </div>
        );
    }
}

const Products = connect(mapStateToProps, mapDispatchToProps)(connectedProducts);
export default Products
