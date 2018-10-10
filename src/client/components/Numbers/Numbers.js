import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import {fetchNumbers} from '../../actions/fetchNumbers';


const mapStateToProps = state => {
    return {numbers: state.numbers};
};

const mapDispatchToProps = dispatch => {
    return {
        fetchNumbers: () => dispatch(fetchNumbers())
    };
};

class connectedNumbers extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.numbers.length === 0) {
            this.props.fetchNumbers();
        }

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
                    {this.props.numbers.map((n) => {
                        return <li key={n.number}>{n.number} multiplied by {n.multiplier} is equal
                            to {n.number * n.multiplier}</li>
                    })}
                </ul>
            </div>
        );
    }
}

const Numbers = connect(mapStateToProps, mapDispatchToProps)(connectedNumbers);
export default Numbers;
