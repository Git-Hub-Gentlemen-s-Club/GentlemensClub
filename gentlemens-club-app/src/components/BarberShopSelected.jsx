import Logo from '../assets/LogoGentlemensClub.png'
import BarbershopLogo from '../assets/barbeariaJH.jpg'
import { faHeart, faShareFromSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaGift, FaPaperPlane } from 'react-icons/fa';
import { IoIosInformationCircleOutline, IoIosSearch } from "react-icons/io";


import styled from "styled-components"

const BarberShop = styled.div`
    background-color: #000;
    `
const Header = styled.header`
    background-color: #161718;
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
        margin-left: 5%;
        cursor: pointer;
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
        cursor:pointer;
        color: #655026;
        border-bottom: 1px solid #B58934;
    }
    `
const Body = styled.div`
    display: flex;
    flex-direction: row;
`
const Section = styled.section`
    width: 65%;
    margin-left: 2rem;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
`
const BarberShopImgDiv = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 2rem 0 2rem;
`
const LogoBarbershopPrincipal = styled.img`
    width: 100%;
    height: 30rem;
    border-radius: 5px;
`
const Avaliation = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    background-color: #B58934;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    padding: 0.5rem;

    h2{
        width: 100%;
        text-align: center;
    }

    p{
        width: 100%;
        text-align: center;
        font-size: 0.8rem;
    }
`
const BarberShopEnderecoDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    margin-left: 1rem;
`
const NameDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 80%;
    padding: 1rem;
    h2{
        color: #B58934;
    }
    p{
        color: rgba(255,255,255, 0.5);
        font-size: 0.7rem;
    }
`
const DivIconsII = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    width: 20%;
    gap: 1rem;
`
const DestaqueDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    align-items: center;
    margin-bottom: 1rem;
    margin-left: 1rem;
    
    span{
        display: flex;
        font-size: 0.7rem;
        color: white;
        padding: 1rem;
        gap: 0.4rem;
    }

    button{
        border: none;
        background-color: #B58934;
        border-radius: 10px;
        padding: 5px 20px;
        font-size: 0.6rem;
        font-weight: 600;
    }
`
const BuscaDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 2rem;
    margin-right: 2rem;
    font-weight: 400;
    margin-bottom: 1rem;

    h2{
        color: #B58934;
    }

    input{
        width: 20rem;
        border-radius: 8px;
        padding: 2px 10px;
    }
`

const ServicosDiv = styled.div`
    margin-top: 1rem;
    color: white;
`

const Aside = styled.aside`
    width: 35%;
    color: #ffffff;
    margin-left: 1rem;
    margin-top: 1rem;
`

const AsideGiftCard = styled.div`
    border: 1px solid #ffffff;
    border-radius: 5px;
    margin-right: 1rem;
    padding: 1rem;

    h4 {
        display: inline;
        margin-left: 5px;
        color: #B58934;
    }

    p{
        font-size: 0.8rem;
        margin-top: 1rem;
    }

    button {
        background-color: #B58934;
        height: 2rem;
        border: none;
        border-radius: 5px;
        padding: 0 5px 0 5px;
        font-weight: 600;
        font-size: 0.7rem;
        display: block;
        margin: 1rem 5px 5px 0;
        cursor: pointer;
    }
`;

const AsideIframe = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    margin-top: 1rem;
    
    iframe{
        /* border-radius: 5px; */
        width: 97%;
        height: 13rem;
        border: none;
    }
`

const CardMap = styled.div`
    p {
        font-size: 0.75rem;
    }

    span {
        display: flex;
        flex-direction: column;
    }

    button {
        display: inline;
        background-color: transparent;
        border: none;
        cursor: pointer;
        border-left: 1px solid white;
    }
    background-color: #B58934;
    padding: 5px;
    border-radius: 5px;
    gap: 10px;
    display: grid;
    grid-template-columns: 1fr 6fr 1fr;
    width: 20rem;
    position: absolute;
    bottom: 1rem;
    left: 0;
    right: 0;
    margin: auto;
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
    destaque: true,
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
                            <FontAwesomeIcon icon={faShareFromSquare} style={{ width: '1.3rem', height: '1.3rem', color: '#B58934' }} />
                            <FontAwesomeIcon icon={faHeart} style={{ width: '1.3rem', height: '1.3rem', color: '#B58934' }} />
                        </DivIcons>
                        <button>Reservar agora</button>
                    </ImgDiv>
                    <LinkDiv>
                        <Link>Corte de Cabelo</Link>
                        <Link>Barbearias</Link>
                        <Link>Corte em casa</Link>
                        <Link>Spa & Massagem</Link>
                        <Link>Sobrancelhas e Cílios</Link>
                        <Link>Agendamentos</Link>
                        <Link>Mais...</Link>
                    </LinkDiv>
                </HeaderDiv>
            </Header>
            <Body>
                <Section>
                    <BarberShopImgDiv>
                        <LogoBarbershopPrincipal src={BarbershopLogo} alt="Logo Gentlemen's Club" />
                        <Avaliation>
                            <h2>{response.reviews.rate.toFixed(1)}</h2>
                            <p>{response.reviews.total} avaliações</p>
                        </Avaliation>
                    </BarberShopImgDiv>
                    <BarberShopEnderecoDiv>
                        <NameDiv>
                            <h2>{response.name}</h2>
                            <p>{response.address}</p>
                        </NameDiv>
                        <DivIconsII>
                            <FontAwesomeIcon icon={faShareFromSquare} style={{ width: '1.3rem', height: '1.3rem', color: '#B58934' }} />
                            <FontAwesomeIcon icon={faHeart} style={{ width: '1.3rem', height: '1.3rem', color: '#B58934' }} />
                        </DivIconsII>
                    </BarberShopEnderecoDiv>
                    {response.destaque && <DestaqueDiv>
                        <span>Destaque <IoIosInformationCircleOutline style={{ width: '1rem', height: '1rem' }} /> | Empreendedor</span>
                        <button>RECOMENDADO PELO GENTLEMAN'S CLUB</button>
                    </DestaqueDiv>}
                    <BuscaDiv>
                        <h2>Serviços</h2>
                        <input type="text" name="servicos" id="servicos" placeholder='Buscar serviços' />
                    </BuscaDiv>
                    <hr />
                    <ServicosDiv>
                        {Object.keys(response.services).map((category, index) => (
                            <div key={index}>
                                <h2>{category}</h2>
                                {response.services[category].map((servico, idx) => (
                                    <div key={idx}>
                                        <h3>{servico.name}</h3>
                                        <p>{servico.description}</p>
                                        <p>Valor: R${servico.value}</p>
                                        <p>Tempo: {servico.time}</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </ServicosDiv>
                </Section>
                <Aside>
                    <AsideGiftCard>
                        <FaGift style={{ color: '#B58934' }} />
                        <h4>Cartão presente</h4>
                        <p>Procurando o presente perfeito? Explore os Cartões
                            Presente disponíveis.</p>
                        <button>Mostrar cartões presentes</button>
                    </AsideGiftCard>
                    <AsideIframe>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.9800718021656!2d-46.85126772466523!3d-23.712405678696406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cfad16a4fa7f99%3A0x1ad1b32a1c7a6a5d!2sAv.%20Quinze%20de%20Novembro%2C%20408%20-%20Centro%2C%20Itapecerica%20da%20Serra%20-%20SP%2C%2006850-100!5e0!3m2!1spt-BR!2sbr!4v1725887313324!5m2!1spt-BR!2sbr" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        <CardMap>
                            <LogoBarbershop src={BarbershopLogo} alt="Logo Gentlemen's Club" />
                            <span>
                                <h5>Barbearia JH</h5>
                                <p>Rua Major Telles, 167, 1 Andar - Sala 3,
                                    06850-001, Itapecerica da Serra</p>
                            </span>
                            <button>
                                <FaPaperPlane style={{ color: '#ffffff' }} />
                            </button>
                        </CardMap>
                    </AsideIframe>
                </Aside>
            </Body>
        </BarberShop >
    )
}

export default BarberShopSelected