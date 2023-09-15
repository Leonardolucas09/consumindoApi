import axios from "axios"
import { useState } from "react"

function Login() {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(event) {
        const credentials = {email, password}

        axios.post()
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
        <form>
            <label>E-mail:</label>
            <input type="email" value={email}/>

            <label>Senha:</label>
            <input type="password" value={password}/>
        </form>
        </>    
    )
}

export default Login