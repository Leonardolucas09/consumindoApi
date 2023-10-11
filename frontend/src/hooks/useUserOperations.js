import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../constantes/url"
import { useForm } from "./useForm"

export const useUserOperations = (initialForm, path) =>{
    
    const navigate = useNavigate()
    const [message, setMessage] = useState("")
    const [form, onChangeForm] = useForm(initialForm)

    useEffect(()=>{
        const token = localStorage.getItem("token")
        if(token){
            navigate("/Home")
        }
    },[navigate])
    
    function handleSubmit(event) {
        event.preventDefault()

        axios.post(`${BASE_URL}${path}`, form {
            headers:{
                "Content-Type": "application/json",
            },
        })
        .then(response => {
            localStorage.setItem("token", response.data.token)
            setMessage(response.data.message)
            navigate("/Home")
        })
        .catch(error => console.log(error))
    }

    return{
        form, onChangeForm, handleSubmit, message
    }
}