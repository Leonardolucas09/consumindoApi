
import { useUserOperations } from "../../hooks/useUserOperations"

function Login() {
    
    const {form, onChangeForm, handleSubmit} = useUserOperations({nome:"", password:""}, "user/login")
    
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
            <input type="email" placeholder="Nome" name="nome" value={form.nome} onChange={onChangeForm}/>

            <label>Senha:</label>
            <input type="password" placeholder="Senha" name="password" value={form.password} onChange={onChangeForm}/>

            <button type="submit">Entrar</button>

        </form>
        </>    
    )
}

export default Login