import React, { useState } from 'react';
import {
  ProfileContainer,
  Sidebar,
  SidebarTitle,
  Menu,
  MenuItem,
  ResourcesTitle,
  ResourcesSubtitle,
  NewLink,
  SettingsOption,
  ContentArea,
  ResourcesBox,
  SidebarContent,
  HamburgerButton,
  CloseButton,
  TitlePerfil,
  ProfileSection,
  ProfilePhoto,
  RecommendedPhotoSize,
  ChangePhotoButton,
  InputGroup,
  PasswordSection,
  PasswordContent,
  PartnerSection,
  DeactivateSection,
  ActionButton
} from '../styles/ClientProfileStyle';
import { FaHome, FaCalendar, FaDollarSign, FaUser, FaWallet, FaCog, FaBars, FaTimes, FaLock, FaPhoneAlt, FaEnvelope, FaEye, FaEyeSlash} from 'react-icons/fa';

const ClientProfile = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const currentPage = 'Perfil'; // Exemplo de como identificar a página atual

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [showPassword, setShowPassword] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });
  
  const togglePasswordVisibility = (field) => {
    setShowPassword((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };  

  return (
    <ProfileContainer>
      {!isSidebarOpen && (
        <HamburgerButton onClick={toggleSidebar}>
          <FaBars />
        </HamburgerButton>
      )}
      <Sidebar className={isSidebarOpen ? 'open' : ''}>
        <SidebarContent>
          {isSidebarOpen && (
            <CloseButton onClick={toggleSidebar}>
              <FaTimes />
            </CloseButton>
          )}
          <div>
            <SidebarTitle>Gentlemen's Club</SidebarTitle>
            <Menu>
              <MenuItem className={currentPage === 'Home' ? 'active' : ''}><FaHome /> Home</MenuItem>
              <MenuItem className={currentPage === 'Agendamentos' ? 'active' : ''}><FaCalendar /> Agendamentos</MenuItem>
              <MenuItem className={currentPage === 'Planos & Preço' ? 'active' : ''}><FaDollarSign /> Planos & Preço</MenuItem>
              <MenuItem className={currentPage === 'Perfil' ? 'active' : ''}><FaUser /> Perfil</MenuItem>
              <MenuItem className={currentPage === 'Carteira' ? 'active' : ''}><FaWallet /> Carteira</MenuItem>
            </Menu>
          </div>

          <div>
            {/* Container para novos recursos */}
            <ResourcesBox>
              <ResourcesTitle>Novos recursos disponíveis!</ResourcesTitle>
              <ResourcesSubtitle>Confira a nova visualização do painel</ResourcesSubtitle>
              <NewLink href="#">O que há de novo?</NewLink>
            </ResourcesBox>

            {/* Opção de configurações separada */}
            <SettingsOption><FaCog /> Configurações</SettingsOption>
          </div>
        </SidebarContent>
      </Sidebar>

      <ContentArea>
        <TitlePerfil>Perfil</TitlePerfil>
        <ProfileSection>
          <div>
            <ProfilePhoto>Foto de Perfil</ProfilePhoto>
            <RecommendedPhotoSize>Tamanho recomendado: 300 x 300</RecommendedPhotoSize>
          </div>
          <div>
            <ChangePhotoButton>Alterar Foto</ChangePhotoButton>
          </div>
        </ProfileSection>

        <InputGroup>
          <p><FaUser className='icon'/> Nome Completo</p>
          <input type="text" />
        </InputGroup>

        <InputGroup>
          <p><FaHome className='icon'/> Endereço</p>
          <input type="text" />
        </InputGroup>
        
        <InputGroup>
          <p><FaPhoneAlt className='icon' /> Telefone</p>
          <input type="text" />
        </InputGroup>
        <InputGroup>
          <p><FaEnvelope className='icon'/> Email</p>
          <input type="email" />
        </InputGroup>

        <PasswordSection>
            <h2>Trocar senha</h2>
            <PasswordContent>
                <div>
                <p><FaLock className='icon' /> Senha atual</p>
                <div style={{ position: 'relative' }}>
                    <input type={showPassword.currentPassword ? "text" : "password"} />
                    <span onClick={() => togglePasswordVisibility('currentPassword')} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}>
                    {showPassword.currentPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>
                </div>
                <div>
                <p><FaLock className='icon' /> Nova Senha</p>
                <div style={{ position: 'relative' }}>
                    <input type={showPassword.newPassword ? "text" : "password"} />
                    <span onClick={() => togglePasswordVisibility('newPassword')} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}>
                    {showPassword.newPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>
                </div>
            </PasswordContent>
            <PasswordContent>
                <div>
                <p><FaLock className='icon' /> Confirmar nova senha</p>
                <div style={{ position: 'relative' }}>
                    <input type={showPassword.confirmPassword ? "text" : "password"} />
                    <span onClick={() => togglePasswordVisibility('confirmPassword')} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}>
                    {showPassword.confirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>
                </div>
                <div>
                    <ActionButton className='changePasswordButton'>Alterar senha</ActionButton>
                </div>
            </PasswordContent>
        </PasswordSection>

        <PartnerSection>
            <h2>Torne-se parceiro</h2>
            <p>Tornar-se parceiro na Gentlemen's Club é uma excelente oportunidade para barbearias se conectarem diretamente com clientes em nossa plataforma exclusiva. Ao se tornar um barbeiro parceiro, você poderá cadastrar suas barbearias, gerenciar seus serviços e atender clientes de forma prática e eficiente. Nossa plataforma facilita essa conexão, oferecendo visibilidade e acesso a um público que busca os melhores profissionais.</p>
                <div className='becomePartnerButton'>
                    <ActionButton>Torne-se parceiro</ActionButton>
                </div>
        </PartnerSection>


        <DeactivateSection>
          <h2>Desativar conta</h2>
          <p>Cuidado! Isso desativará permanentemente sua conta. Você não terá mais acesso a esta comunidade usando essa conta depois de fazer isso.</p>
          <ActionButton className="deactivate">Desativar minha conta</ActionButton>
        </DeactivateSection>

      </ContentArea>
    </ProfileContainer>
  );
};

export default ClientProfile;
