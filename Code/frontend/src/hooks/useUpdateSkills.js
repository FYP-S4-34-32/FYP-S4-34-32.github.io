//==============================//
// Handles updating skills info //
//==============================//

// imports
import { useState } from 'react'

export const useUpdateSkills = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const updateSkills = async (email, skills) => { 

        console.log(email, skills)

        setIsLoading(true)  
        setError(null) 

        const response = await fetch('/api/user/updateSkill', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, skills})
        })

        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }

        if(response.ok) {
            setIsLoading(false)
        }
    }

    return { updateSkills, isLoading, error }
}