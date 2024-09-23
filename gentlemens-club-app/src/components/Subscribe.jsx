// Subscribe.jsx
import React, { useState, useCallback } from 'react';
import Select from 'react-select';
import Slider from 'react-slick';
import {
  Background, Container, LeftSection, RightSection, LogoContainer, Title, Subtitle, InputContainer, Input, Label,
  DateOfBirthContainer, GenderContainer, GenderOption, TermsText, Button, Icon, customSelectStyles, CarouselContainer,
  QuoteContainer, QuoteText, QuoteAuthor, DotsContainer, Dot
} from '../styled_components/subscribe_screen/SubscribeStyles';
import { FaUserAlt, FaPhoneAlt, FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

const days = Array.from({ length: 31 }, (_, i) => ({ value: i + 1, label: i + 1 }));
const months = Array.from({ length: 12 }, (_, i) => ({ value: i + 1, label: i + 1 }));
const years = Array.from({ length: 100 }, (_, i) => ({ value: new Date().getFullYear() - i, label: new Date().getFullYear() - i }));

const quotes = [
  { text: '“Tradição e elegância em cada corte.”', author: "— Gentlemen's Club" },
  { text: '“Sua barba, nosso cuidado."', author: "— Gentlemen's Club" },
  { text: '“Estilo para homens de bom gosto.”', author: "— Gentlemen's Club" }
];

const PasswordInput = ({ showPassword, togglePasswordVisibility }) => (
  <InputContainer>
    <Icon as={FaLock} />
    <Input type={showPassword ? 'text' : 'password'} placeholder="Senha" />
    <Icon as={showPassword ? FaEyeSlash : FaEye} onClick={togglePasswordVisibility} style={{ cursor: 'pointer', marginLeft: '10px' }} />
  </InputContainer>
);

const Subscribe = () => {
  const [selectedGender, setSelectedGender] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(0);

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword(prevState => !prevState);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    beforeChange: (current, next) => setCurrentQuote(next),
    afterChange: (current) => setCurrentQuote(current),
  };

  return (
    <Background>
      <Container>
        <LeftSection>
          <LogoContainer>
            <img src="/src/assets/img/mini_logo.png" alt="Logo Gentlemen's Club" />
          </LogoContainer>

          <Title>Bem Vindo!</Title>
          <Subtitle>CADASTRE-SE AQUI</Subtitle>

          <InputContainer>
            <Icon as={FaUserAlt} />
            <Input type="text" placeholder="Nome completo" />
          </InputContainer>

          <InputContainer>
            <Icon as={FaPhoneAlt} />
            <Input type="tel" placeholder="Celular" />
          </InputContainer>

          <InputContainer>
            <Icon as={FaEnvelope} />
            <Input type="email" placeholder="E-mail" />
          </InputContainer>

          <PasswordInput showPassword={showPassword} togglePasswordVisibility={togglePasswordVisibility} />

          <Label>Data de nascimento:</Label>
          <DateOfBirthContainer>
            <Select options={days} styles={customSelectStyles} placeholder="Dia" />
            <Select options={months} styles={customSelectStyles} placeholder="Mês" />
            <Select options={years} styles={customSelectStyles} placeholder="Ano" />
          </DateOfBirthContainer>

          <Label>Gênero:</Label>
          <GenderContainer>
            <GenderOption onClick={() => setSelectedGender('F')}>
              F
              <input type="radio" name="gender" value="F" checked={selectedGender === 'F'} readOnly />
            </GenderOption>
            <GenderOption onClick={() => setSelectedGender('M')}>
              M
              <input type="radio" name="gender" value="M" checked={selectedGender === 'M'} readOnly />
            </GenderOption>
            <GenderOption onClick={() => setSelectedGender('Outro')}>
              Outros
              <input type="radio" name="gender" value="Outro" checked={selectedGender === 'Outro'} readOnly />
            </GenderOption>
          </GenderContainer>

          <TermsText>
            As pessoas que usam nosso serviço podem ter carregado suas informações de contato no Medium. <a href="#">Saiba mais</a>.
          </TermsText>
          <TermsText>
            Ao clicar em Cadastre-se, você concorda com nossos <a href="#">Termos, Política de Privacidade e Política de Cookies</a>. Você poderá receber notificações por SMS e cancelar isso quando quiser.
          </TermsText>

          <Button>Inscrever-se</Button>
        </LeftSection>

        <RightSection>
          <CarouselContainer>
            <Slider {...settings}>
              <div><img src="/src/assets/subscribe/imgCarousel1.jpg" alt="Imagem 1 do Carrossel" /></div>
              <div><img src="/src/assets/subscribe/imgCarousel2.jpg" alt="Imagem 2 do Carrossel" /></div>
              <div><img src="/src/assets/subscribe/imgCarousel3.jpg" alt="Imagem 3 do Carrossel" /></div>
            </Slider>
            <QuoteContainer>
              <QuoteText>{quotes[currentQuote].text}</QuoteText>
              <QuoteAuthor>{quotes[currentQuote].author}</QuoteAuthor>
            </QuoteContainer>
            <DotsContainer>
                {quotes.map((_, index) => (
                  <Dot key={index} className={currentQuote === index ? 'active' : ''} />
                ))}
              </DotsContainer>
          </CarouselContainer>
        </RightSection>
      </Container>
    </Background>
  );
};

export default Subscribe;
