import Logo from '../assets/LogoGentlemensClub.png'
import BarbershopLogo from '../assets/barbeariaJH.jpg'
import { faHeart, faShareFromSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styled from "styled-components"

const BarberShop = styled.div`
    background-color: #000;
    `
const Header = styled.header`
    background-color: #000;
    display: flex;
    flex-direction: row;
    color: #B58934;
    width: 100%;
    gap: 2rem;
    padding: 1rem 0 2rem 0;
    /* padding-left: 5%; */
    `
const LogoDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15%;
    `
const HeaderDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 85%;
    `
const ImgDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    button{
        background-color: #B58934;
        width: 30%;
        height: 2.5rem;
        border: none;
        border-radius: 5px;
        padding: 0;
        font-weight: 600;
        margin-left: 2rem;
    }
    `
const ImgEnderecoDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 45%;

    h2{
        font-size: 1.1rem;
        font-weight: 400;
        letter-spacing: 1px;
        font-family:'Inter', sans-serif; 
    }
    p{
        font-size: 0.6rem;
    }
`
const DivIcons = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`

const LogoImg = styled.img`
    width: auto;
    height: 6rem;
    `
const LogoBarbershop = styled.img`
    width: auto;
    height: 3rem;
    border-radius: 50%;
    `
const LinkDiv = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    gap: 3rem;
    align-items: center;
    padding-top: 1rem;
    `
const Link = styled.a`
    font-size: 0.7rem;
    padding-bottom: 1rem;
    box-sizing: border-box;
    border-bottom: 1px solid transparent;

    &:hover{
        border-bottom: 1px solid #B58934;
    }
    `

const response = {
    name: "Barbearia JH",
    address: "773 m • Avenida XV de Novembro, 408, 06850-100, Itapecerica da Serra",
    telephone: "(11) 93779-9840",
    openingHours: {
        mon: ["10:00 - 13:30", "14:30 - 19:30"],
        tue: ["10:00 - 13:30", "14:30 - 20:00"],
        wed: ["10:00 - 13:30", "14:30 - 19:30"],
        thu: ["10:00 - 13:30", "14:30 - 20:00"],
        fri: ["10:00 - 13:30", "14:30 - 19:30"],
        sat: ["10:00 - 13:00", "14:00 - 17:00"],
        sun: null
    },
    team: [{ name: "Rafael Santos", img: 'path' }, { name: "Marcos Souza", img: 'path' }, { name: "Pedro Camargo", img: 'path' }],
    location: "Localização do estabelicimento",
    socialLinks: {
        facebook: 'link',
        xuitter: 'link',
        instagram: 'link'
    },
    reviews: {
        rate: 5.0,
        total: 220,
        fiveStars: 217,
        fourStars: 3,
        threeStars: 0,
        twoStars: 0,
        oneStars: 0
    },
    services: {
        popularServices: [
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
        anotherServices: [
            {
                name: 'Taxa sobre cancelamento e não comparecimento.',
                description: 'O não comparecimento implicará no pagamento do valor do corte.',
                value: 70.00,
                time: "5m"
            }
        ],
        hair: [
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
}


const BarberShopSelected = () => {
    return (
        <BarberShop>
            <Header>
                <LogoDiv>
                    <LogoImg src={Logo} alt="Logo Gentlemen's Club" />
                </LogoDiv>
                <HeaderDiv>
                    <ImgDiv>
                        <LogoBarbershop src={BarbershopLogo} alt="Logo Gentlemen's Club" />
                        <ImgEnderecoDiv>
                            <h2>{response.name}</h2>
                            <p>{response.address}</p>
                        </ImgEnderecoDiv>
                        <DivIcons>
                            <FontAwesomeIcon icon={faShareFromSquare} style={{ width: '1.3rem', height: '1.3rem' }} />
                            <FontAwesomeIcon icon={faHeart} style={{ width: '1.3rem', height: '1.3rem' }} />
                        </DivIcons>
                        <button>Reservar agora</button>
                    </ImgDiv>
                    <LinkDiv>
                        <Link>Corte de Cabelo</Link>
                        <Link>Barbearias</Link>
                        <Link>Corte em casa</Link>
                        <Link>Spa & Massagem</Link>
                        <Link>Sombrancelhas e Cílios</Link>
                        <Link>Agendamentos</Link>
                        <Link>Mais...</Link>
                    </LinkDiv>
                </HeaderDiv>
            </Header>
        </BarberShop>
    )
}

export default BarberShopSelected