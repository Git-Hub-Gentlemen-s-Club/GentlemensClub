import styled from 'styled-components';
import backgroundImage from '../assets/subscribe/background.jpg';

export const Background = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  width: 70vw;
  height: 90vh; 
  padding: 0;
`;

export const LeftSection = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 25px;
  background-color: #1C1D21;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative; /* Necessário para o posicionamento absoluto do logo */
`;

export const RightSection = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 25px;
  background-color: #FFFFFF; /* Adicione a cor de fundo desejada */
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 20px;
  left: 20px;

  img {
    width: 40px; /* Ajuste o tamanho conforme necessário */
    height: auto;
  }
`;

export const Title = styled.h1`
  font-family: 'Rye', sans-serif;
  font-size: 30px;
  color: #B58934;
  margin-bottom: 10px;
`;

export const Subtitle = styled.h2`
  font-family: 'Rye', sans-serif;
  font-size: 24px;
  color: #B58934;
  margin-bottom: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  background-color: transparent;
  border: 1px solid #B58934;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  max-width: 500px; /* Ajuste conforme necessário */
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  color: #B58934;
  margin-left: 10px;
  outline: none;
  flex: 1;

  &::placeholder {
    color: #B58934;
  }
`;

export const Label = styled.label`
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  color: #B58934;
  margin-bottom: 10px;
`;

export const DateOfBirthContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 520px;
  margin-bottom: 15px;
  gap: 5px;
`;

export const DateInput = styled.select`
  width: 30%;
  background-color: transparent;
  border: 1px solid #B58934;
  padding: 12px;
  border-radius: 5px;
  color: #B58934;
  flex: 1;

  &::placeholder {
    color: #B58934;
  }
`;

export const customSelectStyles = {
    control: (provided) => ({
      ...provided,
      borderColor: '#B58934',
      color: '#B58934',
      borderRadius: '5px',
      padding: '5px',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      fontSize: '16px',
      width: '165px',
      maxWidth: '520px',
      boxShadow: 'none', // Remove a sombra padrão
      '&:hover': {
        borderColor: '#B58934',
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#B58934',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#B58934',
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: '#B58934',
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      backgroundColor: '#B58934',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#B58934' : '#fff',
      color: state.isSelected ? '#fff' : '#B58934',
      '&:hover': {
        backgroundColor: '#f0e1c2',
        color: '#B58934',
      },
    }),
  };
  
export const GenderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 520px; /* Ajustar o tamanho dos campos */
  margin-bottom: 15px;
  gap: 5px;
`;

export const GenderOption = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 1px solid #B58934;
  padding: 10px;
  border-radius: 5px;
  color: #B58934;
  flex: 1;
  text-align: left;
  cursor: pointer;
  position: relative;
  
  &:not(:last-child) {
    margin-right: 5px;
  }

  input {
    position: absolute;
    right: 10px; /* Alinha o botão de rádio à direita */
    accent-color: #B58934; /* Para navegadores que suportam o estilo de cor do input */
    width: 20px; /* Ajuste o tamanho do botão de rádio */
    height: 20px; /* Ajuste o tamanho do botão de rádio */
  }
`;

export const TermsText = styled.p`
  font-size: 14px;
  color: #FFF;
  margin-bottom: 20px;
  width: 100%;
  max-width: 520px; /* Ajustar o tamanho do texto */

  a {
    color: #B58934;
    text-decoration: none;
  }
`;

export const Button = styled.button`
  background-color: #B58934;
  border: none;
  padding: 10px 20px;
  color: #FFF;
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  border-radius: 5px;
  cursor: pointer;
  align-self: center; /* Centralizar o botão */
`;

export const Icon = styled.div`
  color: #B58934;
  font-size: 18px; /* Ajuste o tamanho do ícone conforme necessário */
`;
