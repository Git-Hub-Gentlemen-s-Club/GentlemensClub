import styled from 'styled-components';

/*
    MENU HAMBURGUER - VERSÃO MOBILE
*/

export const HamburgerButton = styled.button`
  display: none;
  position: fixed;
  top: 20px;
  left: 20px; /* Mantém o botão no lado esquerdo */
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  z-index: 1001;
  
  @media (max-width: 1024px) {
    display: block;
  }
`;

export const CloseButton = styled.button`
  display: none;
  position: absolute;
  right: 5px; /* Mantém o botão dentro do container SidebarContent */
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  
  @media (max-width: 1024px) {
    display: block;
  }
`;

/*
    SESSÃO ESQUERDA - MENUS
*/

export const ProfileContainer = styled.section`
  display: flex;
  height: auto;
`;

export const Sidebar = styled.div`
  width: 250px; /* Largura do menu lateral */
  background-color: #232225; /* Cor de fundo do menu */
  padding: 20px;
  color: white;
  border-right: 2px solid white; /* Borda branca no lado direito */
  display: none;
  
  @media (max-width: 1024px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 250px;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
    z-index: 1000;
    display: block;
    
    &.open {
      transform: translateX(0);
    }
  }
`;

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%; /* Para preencher a altura do sidebar */
  justify-content: space-between; /* Para garantir o espaçamento entre o conteúdo */
  padding-bottom: 20px; /* Espaçamento inferior para o grupo de baixo */
  position: relative; /* Para posicionar o botão de fechar */
`;

export const SidebarTitle = styled.div`
  display: block; /* Faz o link ocupar toda a largura disponível */
  text-align: center; /* Centraliza o texto dentro do link */
  font-family: 'Rye', cursive; /* Fonte Rye */
  font-size: 23px;
  color: #B58934; /* Cor do título */
  margin-bottom: 20px;
  padding-right: 40px; /* Adiciona espaço à direita para o botão de fechar */
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px; /* Espaçamento entre os itens do menu */
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  color: white;
  cursor: pointer;

  &.active {
    color: #B58934; /* Cor do texto e ícone quando ativo */
  }

  &:hover {
    color: #B58934; /* Cor do texto ao passar o mouse */
  }

  svg {
    margin-right: 10px; /* Espaço entre ícone e texto */
  }
`;

export const ResourcesBox = styled.div`
  background-color: #B58934; /* Cor de fundo do container de novos recursos */
  border-radius: 10px; /* Bordas arredondadas */
  padding: 10px; /* Espaçamento interno */
  color: white; /* Cor do texto dentro do container */
`;

export const ResourcesTitle = styled.h2`
  font-size: 0.800rem;
  margin: 10px 0;
  font-weight: 900;
`;

export const ResourcesSubtitle = styled.h3`
  font-size: 0.700rem;
  margin: 10px 0;
`;

export const NewLink = styled.a`
  display: block; /* Faz o link ocupar toda a largura disponível */
  text-align: center; /* Centraliza o texto dentro do link */
  color: black;
  text-decoration: none;
  margin: 10px 0;
  font-weight: 900;
`;

export const SettingsOption = styled.div`
  display: flex;
  align-items: center;
  color: white;
  cursor: pointer;
  margin-top: 20px;
  border-top: 2px solid #B58934; /* Linha de separação */
  padding-top: 15px;

  svg {
    margin-right: 10px; /* Espaço entre ícone e texto */
  }
`;

/*
    SESSÃO DIREITA - INPUTS DO PERFIL
*/

export const ContentArea = styled.section`
  flex: 1; /* Preenche o espaço restante da tela */
  padding: 20px;
  background-color: #232225; /* Cor de fundo da área de conteúdo */
  padding-left: 20%;
  padding-right: 20%;

  @media (max-width: 1024px) {
    padding-left: 5%;
    padding-right: 5%;
  }
`;

export const TitlePerfil = styled.h1`
  font-size: 2.0rem;
  color: #FFF;
  margin-bottom: 20px;

  @media (max-width: 428px) {
    text-align: center;
    margin-bottom: 15px;
  }
`;


export const ProfileSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const ProfilePhoto = styled.h3`
  color: #FFF;
`;

export const RecommendedPhotoSize = styled.p`
  color: #B2AFB6;
`;

export const ChangePhotoButton = styled.button`
  background-color: #B58934;
  color: black;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
`;

export const InputGroup = styled.div`
    
  margin-bottom: 20px;

  p {
    margin-bottom: 5px;
    color: #B2AFB6;
    font-size: 1.0rem;

    .icon{
        color: #B58934;
    }
  }

  input {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
  }
`;

export const PasswordSection = styled.div`
  width: 100%;
  /* height: auto; */
    h2 {
        color: white;
        padding-bottom: 10px;
    }
`;

export const PasswordContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  div {
    flex: 1;
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }

    p {
      margin-bottom: 5px;
      color: #B2AFB6;

      .icon {
        color: #B58934;
      }
    }

    input {
      width: 100%;
      padding: 10px;
      border: none;
      border-radius: 5px;
    }

    .changePasswordButton {
      margin-top: 1.6rem;
    }
  }

  @media (max-width: 428px) {
    flex-direction: column; // Alinha os elementos div verticalmente na versão mobile

    div {
      width: 100%; // Faz com que cada div ocupe toda a largura do container
      margin-right: 0; // Remove a margem direita na versão mobile
      margin-bottom: 10px; // Adiciona um espaçamento inferior entre os elementos
    }
  }
`;


export const PartnerSection = styled.div`
  margin-bottom: 20px;

  h2 {
    color: white;
    padding-bottom: 10px;
  }

  p {
    color: white;
    font-size: 0.80rem;
    margin-bottom: 10px;
  }

  .becomePartnerButton {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
`;

export const DeactivateSection = styled.div`
  margin-bottom: 20px;

  h2 {
    color: white;
  }

  p {
    color: white;
    font-size: 0.80rem;
    margin-bottom: 10px;
  }
`;

export const ActionButton = styled.button`
  background-color: #B58934;
  color: black;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;

  &.deactivate {
    background-color: #EB0E0A;
    color: white;
  }
`;


