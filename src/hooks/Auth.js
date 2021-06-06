import React, {createContext, useCallback, useState, useContext} from 'react'

import api from "../services/api";

const AuthContext = createContext({})

export const AuthProvider = ({children}) => {
    const [data, setData] = useState(() => {
        const token = localStorage.getItem('@marvel:token');
        const user = localStorage.getItem('@marvel:user');

        if(token && user){
            api.defaults.headers.authorization = `Bearer ${token}`
            return {token, user: JSON.parse(user)};
            console.log("oi augusto")
        }

        return {};
    })

    const signIn = useCallback(async ({email, password}) => {
        const response = await api.post('sessions', {
            email,
            password
        })
        const {token, user} = response.data;

        localStorage.setItem('@marvel:token', token);
        localStorage.setItem('@marvel:user', JSON.stringify(user));

        api.defaults.headers.authorization = `Bearer ${token}`

        setData({token, user});
    }, []);

    const signOut = useCallback(() => {
        localStorage.removeItem('@marvel:token');
        localStorage.removeItem('@marvel:user');

        setData({})
    }, [setData])

    const updateUser = useCallback((user) => {
        localStorage.setItem('@marvel:user', JSON.stringify(user));

        setData({
            token: data.token,
            user: {
                ...data.user,
                ...user
            }
        })
    }, [ setData, data.token, data.user])

    return (
        <AuthContext.Provider value={{user: data.user, signIn, signOut, updateUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)

    if(!context){
        throw new Error('useAuth must be used within an auth provider')
    }

    return context
}

