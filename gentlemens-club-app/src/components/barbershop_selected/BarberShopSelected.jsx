import React, { useState } from 'react';

import Logo from "../../assets/Logo_Gentlemens_Club.png"
import img1 from '../../assets/barbearia/img-1.png'
import img2 from '../../assets/barbearia/img-2.png'
import img3 from '../../assets/barbearia/img-3.png'
import img4 from '../../assets/barbearia/img-4.png'
import img5 from '../../assets/barbearia/img-5.png'
import img6 from '../../assets/barbearia/img-6.png'
import equipe1 from '../../assets/barbearia/equipe1.png'
import equipe2 from '../../assets/barbearia/equipe2.png'
import equipe3 from '../../assets/barbearia/equipe3.png'

import { faHeart, faShareFromSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaGift, FaPaperPlane, FaShieldVirus, FaWifi, FaStar, FaCar, FaGamepad, } from 'react-icons/fa';
import { FaCircleCheck, FaRegFlag, FaRegCreditCard } from "react-icons/fa6";
import { IoIosInformationCircleOutline, IoIosSearch, IoIosPhonePortrait } from "react-icons/io";
import { IoBeer } from "react-icons/io5";
import { BiLike, BiDislike } from "react-icons/bi";

import { BarberShop, Header, LogoDiv, HeaderDiv, ImgDiv, ImgEnderecoDiv, DivIcons, LogoImg, LogoBarbershop, LinkDiv, Link, Body, Section, BarberShopImgDiv, LogoBarbershopPrincipal, Avaliation, BarberShopEnderecoDiv, NameDiv, DivIconsII, DestaqueDiv, BuscaDiv, ServicosDiv, Aside, AsideGiftCard, AsideIframe, MembrosEquipe, TeamMember, TeamImage, TeamName, ContatoAside, OpeningHoursContainer, Day, DayName, Hours, CardMap, Accordion, Panel, DivKeyPanel, DivButton, DivPanel, RegrasSaude, NossoTrabalho, ReviewContainer, ServiceTitle, Barber, Rating, Star, Comment, User, Date, Like, Report, Commodities, Reviews, RateDiv, Hrdiv, RateDivRate, ReviewsText, ReviewContainerRating, ReviewContainerUser, ReviewContainerLike, LogoBarbaDiv } from "../../styled_components/barbershop_selected/BarberShopSelectedStyle";
import Pagination from '../home/body_components/Pagination';


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
                    <LogoImg src={PlacaBarbearia}></LogoImg>
                    <LogoBarbaDiv>
                        Gentlemens Club
                        <LogoImg src={BarbaBarbearia} alt="Logo Gentlemen's Club" />
                    </LogoBarbaDiv>
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
                    <Commodities>
                        <h2>Comodidades</h2>
                        {response.commodities.wifi &&
                            <div>
                                <FaWifi style={{ color: '#B58934', height: '1.3rem', width: '1.8rem' }} />
                                <h4>Wi-Fi</h4>
                            </div>}
                        {response.commodities.creditCard &&
                            <div>
                                <FaRegCreditCard style={{ color: '#B58934', height: '1.3rem', width: '1.8rem' }} />
                                <h4>Pagamento com cartão de crédito</h4>
                            </div>}
                        {response.commodities.estacionamento &&
                            <div>
                                <FaCar style={{ color: '#B58934', height: '1.3rem', width: '1.8rem' }} />
                                <h4>Estacionamento</h4>
                            </div>}
                        {response.commodities.video_game &&
                            <div>
                                <FaGamepad style={{ color: '#B58934', height: '1.3rem', width: '1.8rem' }} />
                                <h4>VideoGame</h4>
                            </div>}
                        {response.commodities.bar &&
                            <div>
                                <IoBeer style={{ color: '#B58934', height: '1.3rem', width: '1.8rem' }} />
                                <h4>Bar</h4>
                            </div>}
                    </Commodities>
                    <Reviews>
                        <ReviewsText>
                            <h2>Avaliações</h2>
                            <p>O Gentleman's Club garante que as avaliações com a tag "Verificado pelo
                                Gentleman's" foram adicionadas por usuários registrados que
                                tiveram um agendamento com o provedor. Um usuário registrado no
                                tem a oportunidade de adicionar uma avaliação apenas
                                depois que o serviço foi prestado.</p>
                        </ReviewsText>
                        <RateDiv>
                            <RateDivRate>
                                <h2>{response.reviews.rate.toFixed(1)}<span>/5</span></h2>
                                {renderStars(response.reviews.rate)}
                                <p>Com base em {response.reviews.total} avaliações</p>
                            </RateDivRate>
                            <Hrdiv>
                                <div>
                                    <FaStar style={{ color: '#FF9400', height: '1.5rem', width: '1.8rem' }} />
                                    <p>5</p>
                                    <div style={{ border: "1px solid #B58934", width: "100%", height: 1 }}></div>
                                    <span>{response.reviews.fiveStars}</span>
                                </div>
                                <div>
                                    <FaStar style={{ color: '#FF9400', height: '1.3rem', width: '1.8rem' }} />
                                    <p>4</p>
                                    <div style={{ border: "1px solid white", width: "100%", height: 1 }}></div>
                                    <span>{response.reviews.fourStars}</span>
                                </div>
                                <div>
                                    <FaStar style={{ color: '#FF9400', height: '1.3rem', width: '1.8rem' }} />
                                    <p>3</p>
                                    <div style={{ border: "1px solid white", width: "100%", height: 1 }}></div>
                                    <span>{response.reviews.threeStars}</span>
                                </div>
                                <div>
                                    <FaStar style={{ color: '#FF9400', height: '1.3rem', width: '1.8rem' }} />
                                    <p>2</p>
                                    <div style={{ border: "1px solid white", width: "100%", height: 1 }}></div>
                                    <span>{response.reviews.twoStars}</span>
                                </div>
                                <div>
                                    <FaStar style={{ color: '#FF9400', height: '1.3rem', width: '1.8rem' }} />
                                    <p>1</p>
                                    <div style={{ border: "1px solid white", width: "100%", height: 1 }}></div>
                                    <span>{response.reviews.oneStars}</span>
                                </div>
                            </Hrdiv>
                        </RateDiv>
                    </Reviews>
                    <div>
                        {response.reviews.reviews.map((review) => (
                            <ReviewContainer key={review.id}>
                                <ReviewContainerRating>
                                    <Rating>
                                        {renderStars(review.rate)}
                                    </Rating>
                                    <ServiceTitle>{review.service}</ServiceTitle>
                                    <Barber>por {review.barber}</Barber>
                                </ReviewContainerRating>
                                <ReviewContainerUser>
                                    <User>{review.user} <span>.</span></User>
                                    <Date>{review.date} <FaCircleCheck style={{ color: '#B58934', height: '1.2rem', width: '1.2rem', marginLeft: "1rem" }} /></Date>
                                </ReviewContainerUser>
                                <Comment>{review.review}</Comment>
                                <ReviewContainerLike>
                                    <div>
                                        <Like>
                                            {review.like}
                                            <BiLike style={{ height: "1.5rem", width: "1.5rem" }} />
                                        </Like>
                                        <Like>
                                            {review.like}
                                            <BiDislike style={{ height: "1.5rem", width: "1.5rem" }} />
                                        </Like>
                                    </div>
                                    <Report>REPORTAR <FaRegFlag /></Report>
                                </ReviewContainerLike>
                            </ReviewContainer>
                        ))}
                    </div>
                    <Pagination />
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