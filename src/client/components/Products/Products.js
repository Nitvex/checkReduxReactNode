import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

import {fetchProducts} from '../../actions/fetchProducts'

const mapStateToProps = state => {
    return {products: state.products};
};

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    };
};

class connectedProducts extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchProducts();
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
