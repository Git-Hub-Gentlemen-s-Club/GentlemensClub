/* eslint-disable react/no-unknown-property */
import {
    Background,
    StyledInput,
    OtherLinks,
    ArrowIcon
} from "../styled_components/ForgotPasswordStyles"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa';

const ForgotPassword = () => {
    const [email, setEmail] = useState("")
    const [invalidWarning, setInvalidWarning] = useState("false")
    const navigate = useNavigate()
    const handleChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(email)) {
            alert("O Email inserido não é valido")
            setInvalidWarning("true")
        } else {
            alert("O Email inserido é valido")
        }
        //Código que procede com a recuperação de senha
    }


    return (
        <Background>
            <h1>Recuperação de senha</h1>
            <hr />
            <p>Por favor, insira o seu e-mail no campo indicado para que possamos enviar as instruções de recuperação de senha.</p>
            <form>
                <StyledInput
                    type="text"
                    name="Email"
                    placeholder="Insira o seu email aqui"
                    onChange={handleChange}
                    onFocus={() => { setInvalidWarning("false") }}
                    value={email}
                    invalidwarning={invalidWarning}
                />
                <button onClick={handleSubmit}>Enviar</button>
            </form>
            <OtherLinks>
                <button onClick={() => {navigate("/login")}}><ArrowIcon
                    className="showPassword"
                    as={FaArrowLeft}
                    alt="Mostrar Senha"
                />Voltar Para a tela de login</button>
                <button onClick={() => {navigate("/subscribe")}}>Criar uma conta</button>
            </OtherLinks>
        </Background>
    )
}
export default ForgotPassword