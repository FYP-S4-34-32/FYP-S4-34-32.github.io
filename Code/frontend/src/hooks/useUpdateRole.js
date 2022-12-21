//=================================//
// Handles updating user role info //
//=================================//

// imports
import { useState } from 'react'

export const useUpdateRole = () => {
    const [updateRoleError, setError] = useState(null)
    const [updateRoleIsLoading, setIsLoading] = useState(null)

    const updateRole = async (email, role) => {
        console.log(email, role)

        setIsLoading(true)  
        setError(null) 

        const response = await fetch('/api/user/updateRole', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, role})
        })

        const json = await response.json() 
        console.log(json)

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }

        if(response.ok) {
            setIsLoading(false)
        }

        return json.user.role
    }

    return { updateRole, updateRoleError, updateRoleIsLoading }
}