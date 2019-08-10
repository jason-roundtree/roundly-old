import { useState } from 'react'

export default function useInput(initialState) {
    const [inputValues, setValues] = useState(initialState)
    function handleInputChange(e) {
        const {name, value} = e.target
        setValues(values => ({ ...values, [name]: value }))
    }
    return [inputValues, handleInputChange]
}