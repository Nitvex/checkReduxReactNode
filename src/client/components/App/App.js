import React, {PureComponent} from 'react';
import {connect} from 'react-redux'
import {authenticate} from "../../actions/authenticate";
import {logout} from "../../actions/logout";
import './App.css';
import '../Numbers/Numbers';
import '../Products/Products';
import {Link} from "react-router-dom";

const mapStateToProps = state => {
    return {isAuthenticated: state.isAuthenticated};
};
const mapDispatchToProps = dispatch => {
    return {
        authenticate: () => dispatch(authenticate()),
        logout: () => dispatch(logout())
    };
};

class connectedApp extends PureComponent {

    constructor(props) {
        super(props);
    }

    handleClick = () => {
        console.log(this.props.isAuthenticated);
        this.props.isAuthenticated ?
            this.props.logout() :
            this.props.authenticate();
    };

    render() {
        return (
            <div className="App">
                Hello world!
                <br/>
                <Link to="/numbers">Numbers</Link>
                <br/>
                <Link to="/products">Products</Link>
                <br/>
                {this.props.isAuthenticated ?
                    <button onClick={this.handleClick}>Sign out</button> :
                    <button onClick={this.handleClick}>Sign in</button>
                }
            </div>
        );
    }
}

const App = connect(mapStateToProps, mapDispatchToProps)(connectedApp);

export default App;
