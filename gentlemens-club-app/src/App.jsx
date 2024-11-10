import React, { useState } from "react";
import GlobalStyle from "./styled_components/GlobalStyle";
import Header from "./components/home/header_components/Header";
import BarberCarousel from "./components/home/body_components/BarberCarousel";
import LocationHeader from "./components/home/body_components/LocationHeader";
import Footer from "./components/Footer";
import BarberInfoCard from "./components/home/body_components/BarberInfoCard";
import FiltersButton from "./components/home/body_components/FiltersButton";
import SortButton from "./components/home/body_components/SortButton";
import Pagination from "./components/home/body_components/Pagination"; // Importando o componente Pagination
import InformationCard from "./components/home/body_components/InformationCard"; // Importando o componente InformationCard
import LoginScreen from "./components/LoginScreen"; // Tela de login
import Subscribe from './components/Subscribe';
import ForgotPassword from "./components/ForgotPassword";
import './App.css';
import BarberShopSelected from "./components/barbershop_selected/BarberShopSelected";
import UserMenu from "./components/home/header_components/UserMenu";
import ClientScheduling from "./components/ClientScheduling";
import PartnerScheduling from "./components/PartnerScheduling";
import { Route, Routes } from "react-router-dom"; // Removendo comentários desnecessários
import NavBar from "./components/home/header_components/NavBar";
import ClientProfile from "./components/ClientProfile";
import NewPassword from "./components/NewPassword"

function App() {
    const city = "Itapecerica da Serra";
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5; // Defina o número total de páginas

    // Exemplo de dados de uma barbearia
    const barberData = {
        name: "Juninho Barbearia SP",
        address: "773 m • Avenida XV de Novembro, 408, 06850-100, Itapecerica da Serra",
        image: "/path/to/image.jpg", // Substitua pelo caminho real da imagem
        services: [
            { name: "Corte de Cabelo", price: 50.00, duration: "40min" },
            { name: "Corte de Cabelo e Barbear", price: 80.00, duration: "1h" },
            { name: "Barbear", price: 40.00, duration: "30min" }
        ]
    };


    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            <GlobalStyle />
            <Routes>
                <Route path="/BarbeariaSelecionada" element={<BarberShopSelected/>}/>
                <Route path="/" element={<>
                <Header> 
                    <NavBar />
                </Header>
                <div className="container">
                    <LocationHeader city={city} />
                    <div className="carousel-wrapper">
                    <div className="buttons-container">
                        <FiltersButton />
                        <SortButton />
                    </div>
                    <BarberCarousel />
                </div>
                <BarberInfoCard barberData={barberData} /> 
                <BarberInfoCard barberData={barberData} /> 
                <BarberInfoCard barberData={barberData} /> 
                <BarberInfoCard barberData={barberData} />
                <BarberInfoCard barberData={barberData} /> 
                <BarberInfoCard barberData={barberData} /> 
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            <InformationCard city={city} />  
            <Footer />
                </>}/>
                <Route path="/Subscribe" element={<Subscribe/>}/>
                <Route path="/Login" element={<LoginScreen/>}/>
                <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
                <Route path="/UserMenu" element={<UserMenu/>} />
            </Routes>
            {/* <ClientScheduling/> */}
            {/* <ClientProfile/> */}
            {/* <PartnerScheduling/> */}
            {/* <NewPassword /> */}
        </>
    );
}

export default App;
