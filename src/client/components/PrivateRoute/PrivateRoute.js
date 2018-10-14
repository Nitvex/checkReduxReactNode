import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect, Route} from "react-router-dom";

const mapStateToProps = state => {
    return {isAuthenticated: state.isAuthenticated};
};

class connectedPrivateRoute extends Component {

    render() {
        return (
            this.props.isAuthenticated ?
                <Route {...this.props}/>
                :
                <Redirect
                    to={{
                        pathname: '/',
                        state: {from: this.props.location},
                    }}
                />

        );
    }
}

/* second way to do PrivateRoute
const PrivateRoute = ({component: Component, ...rest}) => {

    return (
        <Route
            {...rest}
            render={props =>
                rest.isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/',
                            state: {from: props.location},
                        }}
                    />
                )
            }
        />
    );
};
*/
export const PrivateRoute = connect(mapStateToProps)(connectedPrivateRoute);

