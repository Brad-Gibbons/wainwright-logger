import { useState } from "react"

const FellDetails = ({ fell }) => {
    const [climbed, setClimbed] = useState('');

    const handleClick = async (e) => {
        e.preventDefault()

        const summit = {climbed} 
        console.log(summit)
        const response = await fetch(`/api/fells/${fell._id}` , {
            method: 'PATCH',
            body: JSON.stringify(summit),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok) {
            console.log(json.error)
        }

        if(response.ok) {
            console.log('climbed!', json)
        }
    }

    console.log(fell.climbed)
    return (
        <div className="fell-details">
            <h4>{fell.title}</h4>
            <p><strong>{fell.area}</strong></p>
            <p><strong>Height:</strong> {fell.height}</p>
            <p><strong>Climbed? </strong>{fell.climbed ? <p>Yes</p> : <p>No</p>} </p>
            <label>
            Summited recently?
             <input 
             type="radio" 
             value="true"
             name={fell._id}
             onChange={(e) => setClimbed(e.target.value)}

             />
                Yes
             </label>
             <label>
             <input 
             type="radio" 
             value="false"
             name={fell._id}
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