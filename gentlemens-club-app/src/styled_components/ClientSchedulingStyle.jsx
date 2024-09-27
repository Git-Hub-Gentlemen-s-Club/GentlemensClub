import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 20px;
  background-color: #19181B;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  @media (max-width: 479px) {
    flex-direction: column;
    padding: 10px;
    height: auto;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    flex-direction: row;
    padding: 15px;
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    padding: 20px;
  }

  @media (min-width: 1280px) {
    padding: 25px;
  }
`;

export const LogoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: #2E2C30;
  width: 100px;
  padding: 15px;
  border-bottom-right-radius: 20px;

  img {
    width: 60px;
  }

  @media (max-width: 479px) {
    width: 60px;
    padding: 10px;

    img {
      width: 35px;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 90px;
    padding: 12px;

    img {
      width: 55px;
    }
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    width: 100px;
    padding: 15px;

    img {
      width: 60px;
    }
  }

  @media (min-width: 1280px) {
    width: 90px;
    padding: 10px;

    img {
      width: 60px;
    }
  }
`;

export const FilterContainer = styled.div`
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  background-color: #232225;
  padding: 55px;
  border-radius: 12px;
  display: flex;

  h4 {
    color: #B2AFB6;
    margin-bottom: 10px;
    font-size: 17px;
    flex: 0;
  }

  p {
    color: #98959D;
    font-size: 13px;
    flex: 0;
  }

  span {
    font-size: 15px;
    color: #98959D;
    padding: 10px;
  }

  .input-container {
    display: flex;
    position: relative;
    margin-bottom: 10px;
    flex-grow: 1;
    width: 100%; /* Garanta que o container ocupe 100% do espaço */

    .icon {
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      color: #B58934; /* A cor desejada do ícone */
      pointer-events: none; /* Garante que o ícone não atrapalhe a interação do input */
    }

    input {
      padding: 10px 10px 10px 40px; /* Padding deve ser ajustado para não causar overflow */
      width: 100%; /* Garante que o input ocupe 100% do container */
      height: auto;
      background-color: #19181B;
      color: white;
      border: 1px solid #444;
      border-radius: 8px;

      &::placeholder {
        color: #aaa;
      }
    }

    .date-picker-container {
      display: flex; /* Para garantir que o ícone e o DatePicker fiquem lado a lado */
      align-items: center; /* Alinhar verticalmente */

      .date-icon {
        position: absolute;
        z-index: 1;
        color: #B58934;
        margin-left: 10px;
      }

      .date-input {
        width: 100%; /* Garante que o input de data ocupe 100% do container */
      }
    }
  }

  /* Media Queries - celular*/
  @media (max-width: 479px) {
    padding: 30px;

  }

  /* Media Queries - notebook*/
  @media (min-width: 1280px) and (max-width: 1919px) {
    padding: 60px;

    h4 {
      font-size: 16px;
    }
  }

  /* Media Queries - desktop*/
  @media (min-width: 1920px) {
      padding: 100px;

      h4 {
        font-size: 17px;
      }

      .input-container {
        width: auto;
        height: 50px;
      }

      .date-picker-container {
        
        .date-input {
          width: auto;
          height: 50px;
        }
      }

      span {
        font-size: 20px;
      }
    }
`;


export const TitleContainer = styled.div`
  margin-bottom: 20px;

  h3 {
    color: #B58934;
    margin-bottom: 10px;
  }

  p {
    color: #98959D;
    font-size: 13px;
    margin-bottom: 20px;
  }

  @media (max-width: 479px) {
    margin-top: 15px;
  }

  @media (min-width: 1280px) {
    h3 {
      font-size: 20px;
    }

    p {
      font-size: 14px;
    }
  }

  /* Media Queries - desktop*/
  @media (min-width: 1920px) {
    margin-bottom: 10px;

    h3 {
      font-size: 27px;
    }

    p {
      font-size: 15px;
    }
  }
`;

export const FilterButtonContainer = styled.button`
  padding: 18px;
  margin-top: 10px;
  background-color: #B58934;
  color: #000;
  border: none;
  cursor: pointer;
  width: 100%;
  border-radius: 8px;
  font-size: 17px;
  font-weight: bolder;

  &:hover {
    background-color: #e8a622;
  }

  @media (max-width: 479px) {
    font-size: 14px;
    padding: 15px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 16px;
    padding: 16px;
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    font-size: 17px;
    padding: 18px;
  }

  @media (min-width: 1280px) {
    font-size: 18px;
    padding: 20px;
  }
`;

export const TableContainer = styled.div`
  flex: 3;
  margin-left: 20px;
  background-color: #232225;
  padding: 20px;
  border-radius: 12px;
  max-height: 400px;
  overflow-y: auto;

  h4 {
    color: #B58934;
    margin-bottom: 10px;
  }

  @media (max-width: 479px) {
    margin-left: 0;
    margin-top: 20px;
    padding: 15px;
    max-height: 300px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    margin-left: 15px;
    padding: 18px;
    max-height: 350px;
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    margin-left: 20px;
    padding: 20px;
    max-height: 400px;
  }

  @media (min-width: 1280px) {
    margin-left: 25px;
    padding: 25px;
    max-height: 500px;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  background-color: #444;
  color: white;
  padding: 10px;

  @media (max-width: 479px) {
    padding: 8px;
    font-size: 12px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 9px;
    font-size: 14px;
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    padding: 10px;
    font-size: 15px;
  }

  @media (min-width: 1280px) {
    padding: 12px;
    font-size: 16px;
  }
`;


export const Td = styled.td`
  background-color: #19181B;
  color: white;
  padding: 10px;

  @media (max-width: 479px) {
    padding: 8px;
    font-size: 12px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 9px;
    font-size: 14px;
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    padding: 10px;
    font-size: 15px;
  }

  @media (min-width: 1280px) {
    padding: 12px;
    font-size: 16px;
  }
`;
