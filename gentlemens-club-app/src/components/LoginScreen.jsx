/* eslint-disable react/no-unescaped-entities */
// import { useState } from "react"
import {
    Background,
    Container,
    RightSide,
    ImageLabel,
    LeftSide,
    Forms,

} from "../styled_components/loginScreen/LoginScreenStyle"
const LoginScreen = () => {
    return (<>
        <Background>
            <Container>
                <RightSide>
                    <ImageLabel>
                        <h1>"Tradição e elegância em cada corte"</h1>
                        <p>― Glentlemen’s Club</p>
                    </ImageLabel>
                </RightSide>
                <LeftSide>
                    <Forms>
                        <img src="\src\assets\footer_svg\miniLogo_icon.svg" className="mini_logo" alt="Imagem de '\src\assets\footer_svg'" />
                        <img src="\src\assets\LoginScreen_images\Welcome_message.svg" alt="Mensagem de boas vindas" />
                        <h1>Login</h1>
                        <p>Insira os detalhes da sua conta</p>
                        <div>
                            <label htmlFor="">Nome de usuário</label>
                            <input type="text" />
                        </div>
                    </Forms>
                </LeftSide>
            </Container>
        </Background>
    </>)
}
export default LoginScreen