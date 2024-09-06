/* eslint-disable react/no-unescaped-entities */
// import { useState } from 'react';
import Slider from 'react-slick';
import {
    Background,
    Container,
    RightSide,
    // ImageLabel,
    // LeftSide,
    // Forms,
    // OtherLinks,
    CarouselContainer,
    ImageSlide,
    // Image
} from "../styled_components/loginScreen/LoginScreenStyle";
const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
};

const LoginScreen = () => {
    // // const [/*inputStates*/, setInputStates] = useState({
    //     'Name': 0,
    //     'Password': 0
    // });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setInputStates(prevStates => ({
    //         ...prevStates,
    //         [name]: value.length
    //     }));
    // };

    return (
        <>
            <Background>
                <Container>
                    {/* <LeftSide>
                        <Forms>
                            <img src="\src\assets\footer_svg\miniLogo_icon.svg" className="mini_logo" alt="Mini Logo" />
                            <img src="\src\assets\LoginScreen_images\Welcome_message.svg" alt="Mensagem de boas vindas" />
                            <h1>Login</h1>
                            <p>Insira os detalhes da sua conta</p>
                            <div>
                                <input
                                    id="nameInput"
                                    name='Name'
                                    type="text"
                                    onChange={handleChange}
                                    placeholder="Nome de usuário"
                                />
                                <input
                                    id="passwordInput"
                                    name="Password"
                                    type="password"
                                    onChange={handleChange}
                                    placeholder="Senha"
                                />
                                <img className="showPassword" src="\src\assets\LoginScreen_images\Show_password.svg" alt="Mostrar Senha" />
                            </div>
                            <div>
                                <a href="#">Esqueceu sua senha?</a>
                                <button>Login</button>
                            </div>
                        </Forms>
                        <OtherLinks>
                            <div>
                                <button>
                                    <img src="\src\assets\LoginScreen_images\Google_icon.png" alt="Google" />
                                    <p>Entrar com Google</p>
                                </button>
                                <button>
                                    <img src="\src\assets\LoginScreen_images\Facebook_icon.png" alt="Facebook" />
                                    <p>Entrar com Facebook</p>
                                </button>
                            </div>
                            <div className="BottomDiv">
                                <p className="BottomText">Não tem uma conta?</p>
                                <button className="SignIn"><p>Inscreva-se</p></button>
                            </div>
                        </OtherLinks>
                    </LeftSide> */}
                    <RightSide>
                        <CarouselContainer>
                            <Slider {...settings}>
                                <ImageSlide>
                                    <h1>Socorro</h1>
                                    {/* <Image src="/src/assets/LoginScreen_images/Slide_1.png" alt="Slide 1" /> */}
                                </ImageSlide>
                                <ImageSlide>
                                    {/* <Image src="/src/assets/LoginScreen_images/Slide_2.jpg" alt="Slide 2" /> */}
                                </ImageSlide>
                            </Slider>
                        </CarouselContainer>
                    </RightSide>
                </Container>
            </Background>
        </>
    );
};

export default LoginScreen;
