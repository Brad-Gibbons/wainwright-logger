import { createContext, useReducer } from "react";

export const FellContext = createContext()

export const fellsReducer = (state, action) => {
    switch(action.type) {
        case 'SET_FELLS':
            return {
                fells: action.payload
            }
        default:
            return state  
    }   
}

// provide to tree 
export const FellContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(fellsReducer, {
        fells: null
    })



    return (
        <FellContext.Provider value={{...state, dispatch}}>
            {children}
        </FellContext.Provider>
    )
}
