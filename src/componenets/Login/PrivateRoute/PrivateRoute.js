import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { ServiceDataLoad } from '../../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser, setLoggedInUser] = useContext(ServiceDataLoad)
    return (
        <Route
            {...rest}
            render={({ location }) =>
            (loggedInUser.email || sessionStorage.getItem('token')) ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;