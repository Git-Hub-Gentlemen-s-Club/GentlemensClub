/* eslint-disable no-useless-escape */
/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
// import Slider from 'react-slick';
import {
    Background,
    Container,
    RightSide,
    ImageLabel,
    LeftSide,
    Forms,
    OtherLinks,
    CarouselContainer,
    ImageSlide,
    StyledCarousel,
    Icon
} from "../styled_components/login_screen/LoginScreenStyle";
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <div className="slick-next">►</div>,
    prevArrow: <div className="slick-prev">◄</div>
};

const LoginScreen = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [/*inputStates*/, setInputStates] = useState({
        'Name': 0,
        'Password': 0
    });

    const togglePasswordVisibility = () => {
      setShowPassword(prevState => !prevState);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputStates(prevStates => ({
            ...prevStates,
            [name]: value.length
        }));
    };
    
    const navigate = useNavigate();

    return (
        <>
            <Background>
                <Container>
                    <LeftSide>
                        <Forms>
                            <img src="\src\assets\footer_svg\miniLogo_icon.svg" className="mini_logo" alt="Mini Logo" />
                            <img src="\src\assets\loginScreen_images\Welcome_message.svg" alt="Mensagem de boas vindas" />
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
                                    type={showPassword ? 'text' : 'password'}
                                    onChange={handleChange}
                                    placeholder="Senha"
                                />
                                <Icon
                                className="showPassword" 
                                as={showPassword ? FaEyeSlash : FaEye }
                                onClick={togglePasswordVisibility}
                                alt="Mostrar Senha" 
                                />

                            </div>
                            <div>
                                <a href="#">Esqueceu sua senha?</a>
                                <button>Login</button>
                            </div>
                        </Forms>
                        <OtherLinks>
                            <div>
                                <button>
                                    <img src="\src\assets\loginScreen_images\Google_icon.png" alt="Google" />
                                    <p>Entrar com Google</p>
                                </button>
                                <button>
                                    <img src="\src\assets\loginScreen_images\Facebook_icon.png" alt="Facebook" />
                                    <p>Entrar com Facebook</p>
                                </button>
                            </div>
                            <div className="BottomDiv">
                                <p className="BottomText">Não tem uma conta?</p>
                                <button className="SignIn" onClick={() => { navigate('/Subscribe')}}><p>Inscreva-se</p></button>
                            </div>
                        </OtherLinks>
                    </LeftSide>
                    <RightSide>
                                <ImageLabel>
                                    <h1>"Tradição e elegância em cada corte."</h1>
                                    <p>― Glentlemen’s Club</p>
                                </ImageLabel>
                        <CarouselContainer>
                            <StyledCarousel {...settings}>
                                <ImageSlide show="/src/assets/loginScreen_images/Slide_1.png">
                                </ImageSlide>
                                <ImageSlide show="/src/assets/loginScreen_images/Slide_2.jpg">
                                </ImageSlide>
                                <ImageSlide show="/src/assets/loginScreen_images/Slide_3.jpg">
                                </ImageSlide>
                            </StyledCarousel>
                        </CarouselContainer>
                    </RightSide>
                </Container>
            </Background>
        </>
    );
};

export default LoginScreen;
