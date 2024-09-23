import React, { useState } from 'react';

import Logo from '../assets/LogoGentlemensClub.png'
import BarbershopLogo from '../assets/barbeariaJH.jpg'
import img1 from '../assets/barbearia/img-1.png'
import img2 from '../assets/barbearia/img-2.png'
import img3 from '../assets/barbearia/img-3.png'
import img4 from '../assets/barbearia/img-4.png'
import img5 from '../assets/barbearia/img-5.png'
import img6 from '../assets/barbearia/img-6.png'
import equipe1 from '../assets/barbearia/equipe1.png'
import equipe2 from '../assets/barbearia/equipe2.png'
import equipe3 from '../assets/barbearia/equipe3.png'

import { faHeart, faShareFromSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaGift, FaPaperPlane, FaShieldVirus } from 'react-icons/fa';
import { FaCircleCheck, FaRegFlag } from "react-icons/fa6";
import { IoIosInformationCircleOutline, IoIosSearch, IoIosPhonePortrait } from "react-icons/io";
import { BiLike, BiDislike } from "react-icons/bi";



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

    p{
        font-size: 0.8rem;
        font-weight: 400;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }

    h3{
        color: #B58934;
        font-size: 0.8rem;
        font-weight: 400;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
    hr{
        border: none;
        border-top: 1px solid #B58934;
    }
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
const MembrosEquipe = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 10px;
`
const TeamMember = styled.div`
  border-radius: 10px;
  text-align: center;
  width: 150px;
`;

const TeamImage = styled.img`
  width: 4rem;
  height: auto;
  border-radius: 50%;
`;

const TeamName = styled.h4`
  margin-top: 0.5rem;
  color: white;
  font-size: 0.6rem;
  font-weight: 400;
`;

const ContatoAside = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 0.8rem;
    padding-top: 2rem;
    padding-bottom: 2rem;

    div{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    button {
        background-color: #B58934;
        height: 2rem;
        width: 4rem;
        border: none;
        border-radius: 5px;
        padding: 0 5px 0 5px;
        font-weight: 600;
        font-size: 0.7rem;
        cursor: pointer;
    }
`
const OpeningHoursContainer = styled.div`
  padding: 1rem;
  border-radius: 10px;
  margin-top: 1rem;
`;

const Day = styled.div`
  padding: 0.5rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
`;

const DayName = styled.div`
  font-weight: bold;
  color: #B58934;
`;

const Hours = styled.div`
  display: flex;
  flex-direction: column;
  color: rgba(255,255,255,0.8);
`;

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
const Accordion = styled.button`
  background-color: transparent;
  color: #ffff;
  cursor: pointer;
  padding-bottom: 1rem;
  padding-top: 1rem;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  transition: 0.4s;
  display: flex;
  justify-content: start;
  gap: 0.5rem;
  align-items: center;
  font-size: 1.2rem;

  &::before {
    content: '${props => (props.active ? '▲' : '▶')}';
    font-size: 12px;
    margin-left: 10px;
  }
`;

const Panel = styled.div`
  padding: 0 18px;
  background-color: transparent;
  display: ${props => (props.active ? 'none' : 'block')};
  overflow: hidden;
`;

const DivKeyPanel = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 0.8rem;
    color: rgba(255,255,255, 0.8);
    justify-content: space-between;
    width: 100%;
    padding-top: 1rem;
    padding-bottom: 1rem;
`
const DivButton = styled.div`
    display:flex;
    gap: 1rem;

    button{
        background-color:#B58934 ;
        padding: 0px 10px 0px 10px;
        height: 1.8rem;
        border: none;
        border-radius: 5px;
        font-size: 0.8rem;
    }
`
const DivPanel = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    
    h4{
        font-weight: 400;
        color: rgba(255,255,255, 0.7);
        
    }
    p{
        font-size: 0.7rem;
        color: rgba(255,255,255, 0.6);
    }
`

const RegrasSaude = styled.div`
    color: white;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
    padding-top: 5rem;
    padding-bottom: 5rem;

    h2{
        width: 100%;
        color: #B58934;
    }

    div{
        width: 40%;
        display: flex;
        flex-direction: row;
        gap: 1rem;
        align-items: center;
    }
`

const NossoTrabalho = styled.div`
    h2 {
        color: #B58934;
        padding-bottom: 2rem;
    }
    div {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
        gap: 1rem;
        background-color: #181818;
        border-radius: 10px;
        padding: 1rem;
        align-items: center;
        img {
            width: 100%;
            height: auto;
            border-radius: 5px;
        }
        img:first-child {
            height: 100%;
            width: 100%;
            grid-row: span 2;
            grid-column: span 2;
        }
    }
    button {
        margin-top: 1rem;
        padding: 0.5rem 1rem;
        background-color: #B58934;
        border: none;
        border-radius: 5px;
        width: 100%;
        margin-bottom: 3rem;
        cursor: pointer;
        &:hover {
            background-color: #A4782C;
        }
    }
`;

const ReviewContainer = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 16px;
  margin: 16px 0;
  color: white;
`;

const ServiceTitle = styled.h3`
  margin: 0 0 8px 0;
`;

const Barber = styled.p`
  margin: 4px 0;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
`;

const Star = styled.span`
  color: ${props => (props.filled ? '#B58934' : '#ccc')};
  margin-right: 4px;
`;

const Comment = styled.p`
  margin: 8px 0;
`;

const User = styled.p`
  margin: 4px 0;
`;

const Date = styled.p`
  margin: 4px 0;
  font-size: 0.9em;
  color: #666;
`;

const Like = styled.button`
    border: 1px solid white;
    border-radius: 10px;
    padding: 10px;
    color: white;
    background-color: transparent;
    display: flex;
    gap: 0.5rem;
`
const Report = styled.button`
    border: none;
    background-color:#B58934;
    display: flex;
    gap: 0.5rem;
    padding: 10px 5px;
    border-radius: 20px;
`

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
        creditCard: true,
        wifi: true,
    }
}

const renderStars = (rate) => {
    return Array.from({ length: 5 }, (_, index) => (
        <Star key={index} filled={index < rate}>★</Star>
    ));
};

const BarberShopSelected = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

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
                                <Accordion
                                    className={activeIndex === index ? 'active' : ''}
                                    onClick={() => toggleAccordion(index)}
                                    active={activeIndex === index}
                                >
                                    {category}
                                </Accordion>
                                <Panel active={activeIndex === index}>
                                    {response.services[category].map((servico, idx) => (
                                        <DivKeyPanel key={idx}>
                                            <DivPanel>
                                                <h3>{servico.name}</h3>
                                                <p>{servico.description}</p>
                                            </DivPanel>
                                            <DivButton>
                                                <button>Reservar</button>
                                                <DivPanel>
                                                    <h4>R$ {servico.value.toFixed(2)}</h4>
                                                    <p>{servico.time}</p>
                                                </DivPanel>
                                            </DivButton>
                                        </DivKeyPanel>
                                    ))}
                                </Panel>
                            </div>
                        ))}
                        <hr />
                    </ServicosDiv>
                    <RegrasSaude>
                        <h2>Regras Local de Saúde e Segurança</h2>
                        <div>
                            <FaShieldVirus style={{ color: '#B58934', height: '1.3rem', width: '1.8rem' }} />
                            <p>Somente com horário agendado</p>
                        </div>
                        <div>
                            <FaShieldVirus style={{ color: '#B58934', height: '1.3rem', width: '1.8rem' }} />
                            <p>Funcionários usam luvas</p>
                        </div>
                        <div>
                            <FaShieldVirus style={{ color: '#B58934', height: '1.3rem', width: '1.8rem' }} />
                            <p>Desinfetamos os equipamentos entre atendimentos</p>
                        </div>
                        <div>
                            <FaShieldVirus style={{ color: '#B58934', height: '1.3rem', width: '1.8rem' }} />
                            <p>Ventilação adequada</p>
                        </div>
                        <div>
                            <FaShieldVirus style={{ color: '#B58934', height: '1.3rem', width: '1.8rem' }} />
                            <p>Espaço de tempo extendido entre os agendamentos</p>
                        </div>
                        <div>
                            <FaShieldVirus style={{ color: '#B58934', height: '1.3rem', width: '1.8rem' }} />
                            <p>Alcool em gel disponivel para uso dos clientes</p>
                        </div>
                    </RegrasSaude>
                    <NossoTrabalho>
                        <h2>Veja nosso trabalho</h2>
                        <div>
                            <img src={img1} />
                            <img src={img2} />
                            <img src={img3} />
                            <img src={img4} />
                            <img src={img5} />
                            <img src={img6} />
                        </div>
                        <button>VEJA TODOS</button>
                    </NossoTrabalho>
                    <div>
                        {response.reviews.reviews.map((review) => (
                            <ReviewContainer key={review.id}>
                                <Rating>
                                    {renderStars(review.rate)}
                                </Rating>
                                <ServiceTitle>{review.service}</ServiceTitle>
                                <Barber>por {review.barber}</Barber>
                                <Comment>{review.review}</Comment>
                                <User>{review.user}</User>
                                <Date>{review.date} <FaCircleCheck /></Date>
                                <div>
                                    <Like>
                                        <BiLike />
                                        {review.like}
                                    </Like>
                                    <Like>
                                        <BiDislike />
                                        {review.like}
                                    </Like>
                                </div>
                                <Report>Reportar <FaRegFlag /></Report>
                            </ReviewContainer>
                        ))}
                    </div>
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
                    <h3>SOBRE NÓS</h3>
                    <p>Cada um tem seu estilo, nós temos todos!</p>
                    <h3>MEMBROS DA EQUIPE</h3>
                    <MembrosEquipe>
                        {response.team.map((member, index) => (
                            <TeamMember key={index}>
                                <TeamImage src={member.img} alt={member.name} />
                                <TeamName>{member.name}</TeamName>
                            </TeamMember>
                        ))}
                    </MembrosEquipe>
                    <p>CONTATOS E HORÁRIO DE FUNCIONAMENTO</p>
                    <hr />
                    <ContatoAside>
                        <div>
                            <IoIosPhonePortrait style={{ color: '#B58934', height: '1.7rem', width: '1.7rem' }} />
                            <p>{response.telephone}</p>
                        </div>
                        <button>Ligar</button>
                    </ContatoAside>
                    <hr />
                    <OpeningHoursContainer>
                        {Object.entries(response.openingHours).map(([day, hours], index) => (
                            <Day key={index}>
                                <DayName>{day}</DayName>
                                <Hours>
                                    {hours ? (
                                        hours.map((hour, idx) => (
                                            <div key={idx}>{hour}</div>
                                        ))
                                    ) : (
                                        <div>Fechado</div>
                                    )}
                                </Hours>
                            </Day>
                        ))}
                    </OpeningHoursContainer>
                    <p>Chegar por favor com 5 a 10 minutos de antecedência, não
                        é permitido desmarcar em cima da hora, tolerância de
                        espera pelo cliente será no máximo sem excessão de 15
                        minutos.Obrigado pela compreensão.. .</p>
                </Aside>
            </Body>
        </BarberShop >
    )
}

export default BarberShopSelected