import styled from 'styled-components';

export const CarouselContainer = styled.div`
  margin: 20px auto;
  width: 100%; /* Ajuste a largura para ocupar toda a tela */
  max-width: 1200px; /* Limite a largura máxima */
  position: relative; /* Adicione esta propriedade para ajustar a posição dos botões */
  
  .slick-prev, .slick-next {
    z-index: 1;
    width: 40px; /* Tamanho dos botões */
    height: 40px; /* Tamanho dos botões */
    background-color: rgba(0, 0, 0, 0.5); /* Fundo semitransparente */
    border-radius: 50%; /* Torna os botões circulares */
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff; /* Cor do ícone */
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    position: absolute; /* Adiciona posição absoluta para ajuste */
    top: 50%; /* Centraliza verticalmente */
    transform: translateY(-50%); /* Corrige o alinhamento vertical */
    border: 2px solid #fff; /* Adiciona o contorno branco */
  }

  .slick-prev {
    left: 10px; /* Ajusta a posição do botão de voltar */
  }

  .slick-next {
    right: 10px; /* Ajusta a posição do botão de avançar */
  }

  .slick-prev::before, .slick-next::before {
    font-size: 2rem; /* Tamanho do ícone dos botões */
    color: #fff; /* Cor do ícone */
  }
`;

export const StyledBarberCard = styled.div`
  position: relative;
  padding: 20px; /* Aumenta o padding para mais espaço interno */
  margin: 0 10px; /* Adicionando margem lateral para espaçar os cards */
  border-radius: 10px;
  overflow: hidden;
  background: #000; /* Fundo preto para o card */
  color: #fff; /* Cor do texto do card */
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Garante que os elementos sejam distribuídos ao longo do card */
  height: 350px; /* Aumenta a altura do card para acomodar a etiqueta destaque */

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.03); /* Ajusta a escala da imagem para um tamanho mais proporcional */
  }

  &:hover {
    transform: scale(1.03); /* Ajusta a escala do card para um tamanho mais proporcional */
  }

  .rating-badge {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: rgba(0, 0, 0, 0.7);
    color: #B58934;
    padding: 5px 10px; /* Ajusta o tamanho do retângulo */
    border-radius: 0 0 0 15px; /* Arredonda somente a ponta inferior esquerda */
    font-size: 0.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
    max-width: 90%; /* Garante que a etiqueta não ultrapasse o card */

    .rating-number {
      font-size: 1rem; /* Ajusta o tamanho da nota para ficar proporcional */
      font-weight: bold;
      margin: 7px 40px; /* Adiciona margin de 7px para cima e para baixo e 40px para a direita */
    }

    div {
      font-size: 0.8rem; /* Ajusta o tamanho do texto de avaliações */
    }
  }

  .highlight-section {
    position: absolute;
    bottom: 15px; /* Alinha no fundo do card */
    left: 15px; /* Alinha ao lado esquerdo */
    display: flex;
    align-items: center;
    background-color: #B58934; /* Cor de fundo da etiqueta "Destaque" */
    color: #000000; /* Cor do texto "Destaque" */
    padding: 5px 10px;
    border-radius: 15px; /* Arredonda os cantos */
    font-size: 0.9rem;
    font-weight: bold;
    z-index: 2; /* Garante que fique sobre a imagem */
    
    .highlight-text {
      margin-right: 10px; /* Espaço entre o texto e o ícone */
    }

    .highlight-icon {
      font-size: 1.2rem; /* Tamanho do ícone */
    }
  }
`;

export const BarberName = styled.h3`
  font-size: 1.2rem;
  margin: 10px 0;
  color: #B58934;
`;

export const BarberAddress = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 60px; /* Aumenta a margem inferior para garantir espaço para a etiqueta destaque */
`;

export const BarberRating = styled.div`
  font-size: 0.8rem;
  color: #999;
`;
