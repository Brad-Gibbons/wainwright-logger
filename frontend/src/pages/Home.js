import { useEffect, useState } from "react"
import FellDetails from '../components/FellDetails'


const Home = () => {
    const [fells, setFells] = useState(null);

    useEffect(() => {
        const fetchFells = async () => {
            const response = await fetch('/api/fells')

            const json = await response.json()

            if(response.ok) {
                setFells(json)
            }
        }

        fetchFells()
    }, [])
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