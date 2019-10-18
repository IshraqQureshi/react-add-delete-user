import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from './auth';

export const Protected_Route = ( {component: Component, ...rest}) => {
    console.log({...rest});
    return (
        <Route
            {...rest}
            render={props => {
                if( auth.isAuthenticated() == 1 )
                {
                    return <Component {...props} />
                }
                else{
                    return (
                        <Redirect 
                        to={{
                            pathname: "/login",
                            state: {
                                from: props.location,
                            }
                        }}
                        />
                    );
                }
            }}
        />
    )
};