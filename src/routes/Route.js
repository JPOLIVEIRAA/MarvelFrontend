import React from 'react'
import {useAuth} from '../hooks/Auth'
import {Route as ReactDOMRoute,
    Redirect,
    RouteProps as ReactDOMRouteProps} from 'react-router-dom'

const Route = ({isPrivate = false, component: Component, ...rest}) => {
    const {user} = useAuth()

    return(
        <ReactDOMRoute 
        {...rest} 
        render={({location}) => {
            return isPrivate === !!user ? (
                <Component/>
            ) : (
                <Redirect to={{
                    pathname: isPrivate ? '/' : '/home',
                    state: {from: location},
            }}/>
            )
        }}/>
    )
}

export default Route;