//========================//
// Handle Signup requests //
//========================//

// imports
import { useState } from 'react'
import { useAuthenticationContext} from './useAuthenticationContext'

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthenticationContext()

    const signup = async (email, password) => {
        setIsLoading(true) // set loading state
        setError(null) // reset error to null in case there was one previously

        // fetch function calls the endpoint in the backend server
        const response = await fetch('/api/user/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}, // type of the data
            body: JSON.stringify({email, password}) // sends {email, password} as the request body
        })

        const json = await response.json() // the return value we get back from the userController.js signup function {email, token}

        // if there is a problem
        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }

        // if response is ok
        if(response.ok) {
            // save the user(jsonwebtoken) to local storage
            localStorage.setItem('user', JSON.stringify(json)) // {email, token}

            // update authentication context
            dispatch({type: 'LOGIN', payload: json})

            // set loading state back to false
            setIsLoading(false)
        }
    }

    return { signup, isLoading, error }
}