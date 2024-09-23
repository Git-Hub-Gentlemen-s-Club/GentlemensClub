import styled from 'styled-components';
import backgroundImage from '../../assets/subscribe/background.jpg';

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
  background-color: rgba(255, 255, 255, 0);
  border-radius: 10px;
  width: 70vw;
  height: 95vh;
  padding: 0;
  box-sizing: border-box; 
  overflow: hidden;

  @media only screen and (max-width: 600px) {
    width: 100vw;
    height: 100vh;
  }
`;

export const LeftSection = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: #1C1D21;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  @media only screen and (max-width: 600px) {
    padding: 20px;
    overflow: scroll;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 20px;
  left: 20px;

  img {
    width: 40px;
    height: auto;
  }
`;

export const Title = styled.h1`
  font-family: 'Rye', sans-serif;
  font-size: 28px;
  color: #B58934;
  margin-bottom: 10px;

  @media only screen and (max-width: 600px) {
    margin-top: 200px;
  }
`;

export const Subtitle = styled.h2`
  font-family: 'Rye', sans-serif;
  font-size: 20px;
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
  max-width: 500px;
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
  max-width: 500px;
  margin-bottom: 15px;
  gap: 5px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
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
      width: '150px',
      maxWidth: '520px',
      boxShadow: 'none',
      '&:hover': {
        borderColor: '#B58934',
      },
      '@media (max-width: 600px)': {
        width: '90vw',
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
  max-width: 490px;
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
    right: 10px;
    accent-color: #B58934; 
    width: 20px;
    height: 20px;
  }
`;

export const TermsText = styled.p`
  font-size: 14px;
  color: #FFF;
  margin-bottom: 20px;
  width: 100%;
  max-width: 520px;

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
  align-self: center;
`;

export const Icon = styled.div`
  color: #B58934;
  font-size: 18px;
`;

export const RightSection = styled.div`
  flex: 1;
  width: 100%; 
  height: 100%; 
  background-color: #1C1D21;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: hidden;
  position: relative;

  @media only screen and (max-width: 1077px) {
    display: none;
  }
`;

export const CarouselContainer = styled.div`
  width: 100%; 
  height: 100%; 
  overflow: hidden;
  
  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  img {
    width: 100%; 
    height: 100%;
    object-fit: cover;
  }
`;

export const QuoteContainer = styled.div`
  position: absolute;
  bottom: 90px;
  background-color: #1C1D21;
  color: #B58934;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;


export const QuoteText = styled.p`
  font-family: 'Rye', sans-serif;
  font-size: 25px;
  margin: 0;
  line-height: 1.5;
`;

export const QuoteAuthor = styled.p`
  font-family: 'Rye', sans-serif;
  font-size: 17px;
  margin: 0;
  margin-top: 5px;
  line-height: 1.8;
`;

export const DotsContainer = styled.div`
  position: absolute;
  bottom: 50px; /* Ajuste conforme necessário */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const Dot = styled.div`
  width: 15px;
  height: 5px;
  border-radius: 20%;
  background-color: #ffffff;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &.active {
    background-color: #8c6d3b;
  }
`;