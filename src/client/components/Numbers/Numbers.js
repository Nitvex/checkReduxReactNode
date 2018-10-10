import React, {Component} from 'react';

import {Link} from "react-router-dom";

class Numbers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numbers: []
        };
    }

    componentDidMount() {
        let requestOptions = {
            method: 'GET',
            headers: new Headers(),
            mode: 'cors',
            cache: 'default'
        };
        fetch('http://127.0.0.1:3000/numbers', requestOptions).then((response) => {
            return response.json();
        }).then((numbers) => {
            console.log(numbers);
            this.setState({numbers: numbers});
        });

    }

    render() {
        return (
            <div className="numbers">
                Numbers
                <br/>
                <Link to="/">to Main</Link>
                <br/>
                <Link to="/products">Products</Link>
                <ul>
                    {this.state.numbers.map((n) => {
                        return <li key={n.number}>{n.number} multiplied by {n.multiplier} is equal
                            to {n.number * n.multiplier}</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default Numbers;
