/* eslint-disable react/no-unknown-property */
import {
    Background,
    StyledInput,
    StyledIcon,
    StyledPopUp,
    CheckImage
} from "../styles/NewPasswordStyle"
import { useState } from "react"
// import { useNavigate } from "react-router-dom";
import { FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';


import Popup from 'reactjs-popup'

const ForgotPassword = () => {
    const [passwords, setPasswords] = useState("")
    const [Password1Invalid, setPassword1Invalid] = useState("false")
    const [Password2Invalid, setPassword2Invalid] = useState("false")
    const [showPassword1, setShowPassword1] = useState(false)
    const [showPassword2, setShowPassword2] = useState(false)
    const [changeSuccessfull, setChangeSuccessfull] = useState(false)
    const [resultMessage, setResultMessage] = useState("deu ruim")
    // const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPasswords(prevStates => ({
            ...prevStates,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        
        // const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        if (/*!regex.test(passwords.Password1)*/ passwords === "" || passwords.Password1.length < 6) {
            setResultMessage("A senha deve ter no mínimo 6 caractéres")
            setPassword1Invalid("true")
            setChangeSuccessfull(false)
        } else {
            if (passwords.Password1 === passwords.Password2) {
                setResultMessage("Bem vindo de volta!")
                setChangeSuccessfull(true)
                setPassword2Invalid("false")
                setPassword1Invalid("false")
                //Código que procede com a substituição de senha
            } else {
                setChangeSuccessfull(false)
                setResultMessage("As senhas não batem")
                setPassword1Invalid("true")
                setPassword2Invalid("true")
            }
        }
    }


    return (
        <Background>
            <h1>Recuperação de senha</h1>

            <hr />
            <p>Por favor, insira a sua nova senha e tenha acesso a plataforma <span >Gentlemen`s Club</span></p>
            <form>
                <div>

                    <label htmlFor="">Nova Senha</label>
                    <div>
                        <FaLock className="LockIcon" />
                        <StyledInput
                            type={showPassword1 ? "text" : "password"}
                            name="Password1"
                            onChange={handleChange}
                            onFocus={() => { setPassword1Invalid("false") }}
                            invalidwarning={Password1Invalid}
                        />
                        <StyledIcon
                            as={showPassword1 ? FaEye : FaEyeSlash}
                            onClick={() => setShowPassword1(!showPassword1)}
                        />
                    </div>

                </div>
                <div>
                    <label htmlFor="">Confirmar nova senha</label>
                    <div>
                        <FaLock className="LockIcon" />
                        <StyledInput
                            type={showPassword2 ? "text" : "password"}
                            name="Password2"
                            onChange={handleChange}
                            onFocus={() => { setPassword2Invalid("false") }}
                            invalidwarning={Password2Invalid}
                        />
                        <StyledIcon
                            as={showPassword2 ? FaEye : FaEyeSlash}
                            onClick={() => setShowPassword2(!showPassword2)}
                        />
                    </div>
                </div>
                <Popup
                    trigger={<button type="button">Alterar senha</button>}
                    modal
                    onOpen={handleSubmit}
                    // onClose={() => } implementar função que retorna pra tela de login caso a alteração seja bem sucedida.
                >
                    {(close) => (
                        <StyledPopUp>
                            <CheckImage
                            submitResult = {changeSuccessfull}
                            />
                            <div>
                                <h2>{changeSuccessfull ? "Senha alterada" : "Erro encontrado"}</h2>
                                <p>{resultMessage}</p>
                            </div>

                            <button onClick={close}>X</button>
                        </StyledPopUp>
                    )}
                </Popup>

            </form>
        </Background>
    )
}
export default ForgotPassword