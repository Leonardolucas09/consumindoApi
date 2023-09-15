import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    function saveUserInfoLocalStorage(token){
        localStorage.setItem("token", token)
        localStorage.setItem("email", email)
    }
    
    function handleSubmit(event) {
        event.preventDefault()

        const credentials = {email, password}

        axios.post("http://localhost:8000/login", credentials, {
            headers:{
                "Content-Type": "application/json",
            },
        })
        .then(response => {
            alert(response.data.message)
            saveUserInfoLocalStorage(response.data.token)
            navigate("Home")
        })
        .catch(error => console.log(error))
    }

    // function handleInputEmail(event) {
    //     setEmail(event.target.value)
    // }

    // function handleInputPassword(event) {
    //     setPassword(event.target.value)
    // }

    console.log(password)
    console.log(email)

    return(
        <>
        <form onSubmit={handleSubmit}>
            <label>E-mail:</label>
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)}/>

            <label>Senha:</label>
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>

            <button type="submit">Entrar</button>

        </form>
        </>    
    )
}

export default Login