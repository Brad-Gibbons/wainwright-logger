import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const logout = () => {
        // need to update  global state and deletelocal state 

        // delete store
        localStorage.removeItem('user')

        // dispatch log out 
        dispatch({type: 'LOGOUT'})
    }

    return {logout}
}