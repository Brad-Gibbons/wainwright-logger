import { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch(action.type) {
        case 'LOGIN':
            return {
                user: action.payload
            }
        case 'LOGOUT':
            return {user: null}
            default:
                return state    
        }
}


// children = components it wraps 
export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })

    useEffect(() => {
        // parse as it's a string in local storage and need in json
        const user = JSON.parse(localStorage.getItem('user'))

        if(user) {
            dispatch({type: 'LOGIN', payload: user})
        }
    } , [])
    console.log('authcontext state ', state)

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            { children }
        </AuthContext.Provider>
    )
}

