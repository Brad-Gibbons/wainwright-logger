import { useState } from "react"
import { useFellsContext } from "../hooks/useFellsContext";
import { useAuthContext } from "../hooks/useAuthContext";


const FellDetails = ({ fell }) => {
    const {dispatch} = useFellsContext()
    const [climbed, setClimbed] = useState('');
    const {user}= useAuthContext();
    // console.log(user.email)

    const handleClick = async (e) => {
        e.preventDefault()
        if(!user) {
            console.log('You must be logged in')
            return
        }

        const summit = {climbed, user} 
        console.log(summit, 'test', fell.id)

       


        const response = await fetch(`/api/fells/${fell.id}` , {
            method: 'PATCH',
            body: JSON.stringify(summit),
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()

        if(!response.ok) {
            console.log(json.error)
        }

        if(response.ok) {
            // Grab full list again
            const fellResponse = await fetch('/api/fells', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })

            const fellJson = await fellResponse.json()
            // update state
            if(response.ok) {
                dispatch({type: 'SET_FELLS', payload: fellJson})
            }

            console.log('climbed!', json)
        }
    }

    // console.log(fell.climbed)
    return (
        <div className="fell-details">
            <h4>{fell.fellName}</h4>
            <p><strong>{fell.area}</strong></p>
            <p><strong>Height:</strong> {fell.heightMetre}</p>
            <p><strong>Climbed? </strong>{fell.climbed ? <p>Yes</p> : <p>No</p>} </p>
            <label>
            Summited recently?
             <input 
             type="radio" 
             value="true"
             name={fell.id}
             onChange={(e) => setClimbed(e.target.value)}

             />
                Yes
             </label>
             <label>
             <input 
             type="radio" 
             value="false"
             name={fell.id}
             onChange={(e) => setClimbed(e.target.value)}
             />
                No
             </label>
             <br></br>
             <button
                onClick={handleClick}
             >Update</button>
        </div>
    )
}

export default FellDetails