import React, { useState, useContext } from "react";

import { HeaderDiv,ImgDiv, LogoBarbershop, ImgEnderecoDiv, DivIcons, LogoAddressWrapper, Button } from "../../styled_components/barbershop_selected/BarberShopSelectedStyle";

import SelectLang from "../home/header_components/SelectLang";

import DarkThemeBtn from "../home/header_components/DarkThemeBtn";

import { faHeart, faShareFromSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { FaRegUserCircle } from "react-icons/fa";

import BarberShopLogo from "../../assets/barbeariaJH.jpg";
import equipe1 from '../../assets/barbearia/equipe1.png';
import equipe2 from '../../assets/barbearia/equipe2.png';
import equipe3 from '../../assets/barbearia/equipe3.png';

import NavListComponent from "../home/header_components/NavList";
import { LoginContext } from "../../context/LoginContext";
import UserMenuButton from "../home/header_components/UserMenuButton";
import { LoginWrapper, LoginSignUp } from "../../styled_components/home/header_style/HeaderStyle";
import { useNavigate } from "react-router-dom";


const response = {
    name: "Barbearia JH",
    address: "773 m • Avenida XV de Novembro, 408, 06850-100, Itapecerica da Serra",
    telephone: "(11) 93779-9840",
    openingHours: {
        "Segunda-Feira": ["10:00 - 13:30", "14:30 - 19:30"],
        "Terça-Feira": ["10:00 - 13:30", "14:30 - 20:00"],
        "Quarta-Feira": ["10:00 - 13:30", "14:30 - 19:30"],
        "Quinta-Feira": ["10:00 - 13:30", "14:30 - 20:00"],
        "Sexta-Feira": ["10:00 - 13:30", "14:30 - 19:30"],
        "Sábado": ["10:00 - 13:00", "14:00 - 17:00"],
        "Domingo": null
    },
    destaque: true,
    team: [{ name: "Rafael Santos", img: equipe1 }, { name: "Marcos Souza", img: equipe2 }, { name: "Pedro Camargo", img: equipe3 }],
    location: "Localização do estabelicimento",
    socialLinks: {
        facebook: 'link',
        xuitter: '',
        instagram: 'link'
    },
    reviews: {
        rate: 5.0,
        total: 220,
        fiveStars: 217,
        fourStars: 3,
        threeStars: 0,
        twoStars: 0,
        oneStars: 0,
        reviews: [
            {
                id: "0000",
                rate: 5,
                service: "Corte de cabelo (Moderno e clássico)",
                barber: "Rafael Santos",
                review: "Excelente Atendimento",
                user: "Henrique M",
                date: "ago 10, 2024",
                like: 0,
                deslike: 0
            },
            {
                id: "0001",
                rate: 5,
                service: "Corte Infantil (2 aos 10 ) idade",
                barber: "Rafael Santos",
                review: "Simplesmente o melhor",
                user: "Kelly M",
                date: "jul 24, 2024",
                like: 0,
                deslike: 0
            },
            {
                id: "0002",
                rate: 5,
                service: "Corte + barba ( barba S/toalha e cabelo S/lavagem)",
                barber: "Rafael Santos",
                review: "Sempre superando expectativas",
                user: "Henrique M",
                date: "jun 28, 2024",
                like: 0,
                deslike: 0
            },
        ]
    },
    services: {
        "Serviços Populares": [
            {
                name: 'Corte de cabelo (Moderno e clássico)',
                description: 'O não comparecimento e cancelamentos consecutivos implicará no pagamento d…',
                value: 70.00,
                time: "1h 20m"
            },
            {
                name: 'Corte de cabelo',
                description: 'Somente o corte de cabelo',
                value: 50.00,
                time: "1h 20m"
            },
            {
                name: 'Corte + barba ( barba S/toalha e cabelo S/lavagem)',
                description: 'Corte de cabelo sem lavagem, serviço de barba sem toalha quente, ambos feitos d…',
                value: 90.00,
                time: "1h 45m"
            },
        ],
        "Outros Serviços": [
            {
                name: 'Taxa sobre cancelamento e não comparecimento.',
                description: 'O não comparecimento implicará no pagamento do valor do corte.',
                value: 70.00,
                time: "5m"
            }
        ],
        Cabelo: [
            {
                name: 'Corte de cabelo (Moderno e clássico)',
                description: 'O não comparecimento e cancelamentos consecutivos implicará no pagamento d…',
                value: 70.00,
                time: "1h 20m"
            },
            {
                name: 'Corte Infantil (2 aos 10 ) idade.',
                description: 'Nosso profissional tem bastante experiência com cortes infantil 😁',
                value: 50.00,
                time: "1h"
            },
        ],
    },
    commodities: {
        creditCard: true, //NÃO EXISTE NO BANCO
        wifi: true,
        estacionamento: true,
        video_game: true,
        bar: true,
    }
}

export default function HeaderBarberShopSelected() {
    const [toggled, setToggled] = useState(false);

    const handleClick = () => {
        setToggled(!toggled);
    } 

    const navigate = useNavigate();

    const {isLoggedIn} = useContext(LoginContext);

    return (
            <HeaderDiv>

                <ImgDiv>

                <LogoAddressWrapper>
                    <LogoBarbershop src={BarberShopLogo} alt="Logo Gentlemen's Club" />
                    <ImgEnderecoDiv>
                        <h2>{response.name}</h2>
                        <p>{response.address}</p>
                    </ImgEnderecoDiv>
                </LogoAddressWrapper>
                
                
                    <DivIcons>
                        <FontAwesomeIcon icon={faShareFromSquare} style={{ width: '1.3rem', height: '1.3rem', color: '#B58934' }} />
                        <FontAwesomeIcon icon={faHeart} style={{ width: '1.3rem', height: '1.3rem', color: '#B58934' }} />
                    </DivIcons>
                

                    <div>
                        <Button>Reservar agora</Button>
                    </div>
                

                    <>
                        { !isLoggedIn && <LoginWrapper>
                            <FaRegUserCircle style={{ color:"#dddddd", width: '30px', height: '30px' }} className="icons" />
                                <LoginSignUp onClick={() => {navigate('/Login')}}>
                                    Entrar
                                </LoginSignUp>/
                                <LoginSignUp onClick={() => {navigate('/Subscribe')}}>
                                Inscrever-se
                                </LoginSignUp>
                        </LoginWrapper> }
                    {isLoggedIn && <UserMenuButton />}
                    </>

                    <SelectLang />
        
                    <DarkThemeBtn toggled={toggled} handleClick={handleClick} />

                </ImgDiv>
        
                <NavListComponent />
        
            </HeaderDiv>
    );
}