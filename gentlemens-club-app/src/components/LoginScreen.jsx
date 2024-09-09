/* eslint-disable react/no-unescaped-entities */
// import { useState } from "react"
import {
    Background,
    Container,
    RightSide,
    ImageLabel,

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
            </Container>
        </Background>
    </>)
}
export default LoginScreen