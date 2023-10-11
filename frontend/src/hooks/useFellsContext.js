import { FellContext } from "../context/FellContext";
import { useContext } from "react";

export const useFellsContext = () => {
    const context = useContext(FellContext)

    if(!context) {
        throw Error('Must be used in right provider')
    }

    return context
}