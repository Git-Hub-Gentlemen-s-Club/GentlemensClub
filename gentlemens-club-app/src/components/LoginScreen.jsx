/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react"
import {
    Background,
    Container,
    RightSide,
    ImageLabel,
    LeftSide,
    Forms,
    OtherLinks,


} from "../styled_components/loginScreen/LoginScreenStyle"
const LoginScreen = () => {
    // const [passwordFocused, setPasswordFocused] = useState(false)
    const [inputStates, setInputStates] = useState({
        'Name': 0,
        'Password': 0
    });

    const handleChange = (e) => {
        const { name, value } = e.target
        setInputStates((prevStates) => ({
            ...prevStates,
            [name]: value.length
        }));
        console.log(inputStates)
    };

    return (<>
        <Background>
            <Container>
                <LeftSide>
                    <Forms>
                        <img src="\src\assets\footer_svg\miniLogo_icon.svg" className="mini_logo" alt="Imagem de '\src\assets\footer_svg'" />
                        <img src="\src\assets\LoginScreen_images\Welcome_message.svg" alt="Mensagem de boas vindas" />
                        <h1>Login</h1>
                        <p>Insira os detalhes da sua conta</p>
                        <div>
                            <input
                                show={inputStates.Name}
                                id="nameInput"
                                name='Name'
                                type="text"
                                onChange={() => { handleChange }}
                                placeholder="Nome de usuário"
                            />
                            <input
                                show={inputStates.Name}
                                id="passwordInput"
                                name="Password"
                                type="text"
                                onChange={() => { handleChange }}
                                placeholder="Senha"
                            />
                            <img className="showPassword" src="\src\assets\LoginScreen_images\Show_password.svg" alt="" />
                        </div>
                        <div>
                            <a href="#">Esqueceu sua senha?</a>
                            <button>Login</button>
                        </div>
                    </Forms>
                    <OtherLinks>
                        <div>
                            <button>
                                <img src="\src\assets\LoginScreen_images\Google_icon.png" alt="" />
                                <p>Entrar com Google</p>
                            </button>
                            <button>
                                <img src="\src\assets\LoginScreen_images\Facebook_icon.png" alt="" />
                                <p>Entrar com Facebook</p></button>
                        </div>
                        <div className="BottomDiv">
                            <p className="BottomText" >Não tem uma conta?</p>
                            <button className="SignIn">Inscreva-se</button>
                        </div>
                    </OtherLinks>
                </LeftSide>
                <RightSide>
                    <ImageLabel>
                        <h1>"Tradição e elegância em cada corte"</h1>
                        <p>― Glentlemen’s Club</p>
                    </ImageLabel>
                </RightSide>
            </Container>
        </Background>
    </>)
}
export default LoginScreen