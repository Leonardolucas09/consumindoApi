import { useForm } from "../../hooks/useForm"

const SignupPage = () => {

    const [form, onChangeForm] = useForm({nome:"", password:"", email:""})

    return(
        
        <>
        <input placeholder="Nome" name="nome" type="nome" value={form.username} onChange={onChangeForm}/>
        <input placeholder="Email" name="email" type="email" value={form.email} onChange={onChangeForm}/>
        <input placeholder="Senha" name="passowrd" type="password" value={form.password} onChange={onChangeForm}/>
        </>
        
    )

}

export default SignupPage