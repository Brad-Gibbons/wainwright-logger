import { useEffect, useState } from "react"
import FellDetails from '../components/FellDetails'
import { useFellsContext } from "../hooks/useFellsContext";
import {useAuthContext} from '../hooks/useAuthContext'


const Home = () => {
    const {fells, dispatch} = useFellsContext()
    const [fetchFells, setFetchFells] = useState('')
    const {user} = useAuthContext()

    useEffect(() => {
        const fetchFells = async () => {
            const response = await fetch('/api/fells', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })

            const json = await response.json()
            setFetchFells(json.fells)
            console.log(json.fells)
            if(response.ok) {
                dispatch({type: 'SET_FELLS', payload: json})
            }
        }
        if(user) {
            fetchFells()
        }
        
    }, [dispatch, user])
    return (
        <div className="home">
            <div className="fells">
                {fells && fetchFells.map((fell) => (
                    <FellDetails key={fell.id} fell={fell}/>
                ))}
            </div>
        </div>
    )
}

export default Home