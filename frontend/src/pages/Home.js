import { useEffect, useState } from "react"
import FellDetails from '../components/FellDetails'
import { useFellsContext } from "../hooks/useFellsContext";


const Home = () => {
    const {fells, dispatch} = useFellsContext()

    useEffect(() => {
        const fetchFells = async () => {
            const response = await fetch('/api/fells')

            const json = await response.json()

            if(response.ok) {
                dispatch({type: 'SET_FELLS', payload: json})
            }
        }

        fetchFells()
    }, [dispatch])
    return (
        <div className="home">
            <div className="fells">
                {fells && fells.map((fell) => (
                    <FellDetails key={fell._id} fell={fell}/>
                ))}
            </div>
        </div>
    )
}

export default Home