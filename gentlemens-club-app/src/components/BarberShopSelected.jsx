import Logo from '../assets/LogoGentlemensClub.png'
import BarbershopLogo from '../assets/barbeariaJH.jpg'
import { faHeart, faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styled from "styled-components"

const barberShopSelected = styled.div`
    background-color: #000;
    `
const Header = styled.header`
    background-color: #000;
    display: flex;
    flex-direction: row;
    color: #B58934;
    `
const LogoDiv = styled.div`
    `
const HeaderDiv = styled.div`
    `
const ImgDiv = styled.div`
    display: flex;
    flex-direction: row;
    `
const ImgEnderecoDiv = styled.div`
    display: block;
`
const LinkDiv = styled.div`
    `
const LogoImg = styled.img`
    width: auto;
    height: 8rem;
    `
const LogoBarbershop = styled.img`
    width: auto;
    height: 3rem;
    border-radius: 50%;
    `
const Link = styled.a`
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
        <barberShopSelected>
            <Header>
                <LogoDiv>
                    <LogoImg src={Logo} alt="Logo Gentlemen's Club" />
                </LogoDiv>
                <HeaderDiv>
                    <ImgDiv>
                        <LogoBarbershop src={BarbershopLogo} alt="Logo Gentlemen's Club" />
                        <ImgEnderecoDiv>
                            {response.name}
                            {response.address}
                        </ImgEnderecoDiv>
                        <FontAwesomeIcon icon={faArrowUpFromBracket} />
                        <FontAwesomeIcon icon={faHeart} />
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
        </barberShopSelected>
    )
}

export default BarberShopSelected