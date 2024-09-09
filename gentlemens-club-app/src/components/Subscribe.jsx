import React, { useState } from 'react';
import Select from 'react-select';
import { Background, Container, LeftSection, RightSection, LogoContainer, Title, Subtitle, InputContainer, Input, Label, DateOfBirthContainer, GenderContainer, GenderOption, TermsText, Button, Icon, customSelectStyles } from '../styled_components/SubscribeStyles';
import { FaUserAlt, FaPhoneAlt, FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

const days = Array.from({ length: 31 }, (_, i) => ({ value: i + 1, label: i + 1 }));
const months = Array.from({ length: 12 }, (_, i) => ({ value: i + 1, label: i + 1 }));
const years = Array.from({ length: 100 }, (_, i) => ({ value: new Date().getFullYear() - i, label: new Date().getFullYear() - i }));

const Subscribe = () => {
  const [selectedGender, setSelectedGender] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <Background>
      <Container>
        <LeftSection>
          <LogoContainer>
            <img src="/src/assets/img/mini_logo.png" alt="Logo G" />
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

          <InputContainer>
            <Icon as={FaLock} />
            <Input 
              type={showPassword ? 'text' : 'password'} 
              placeholder="Senha" 
            />
            <Icon 
              as={showPassword ? FaEyeSlash : FaEye} 
              onClick={togglePasswordVisibility}
              style={{ cursor: 'pointer', marginLeft: '10px' }} 
            />
          </InputContainer>

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
          {/* Adicione qualquer conteúdo necessário no RightSection */}
        </RightSection>
      </Container>
    </Background>
  );
};

export default Subscribe;
