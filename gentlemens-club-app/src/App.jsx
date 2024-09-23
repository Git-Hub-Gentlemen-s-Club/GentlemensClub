
import React, { useState } from "react";
import GlobalStyle from "./styled_components/GlobalStyle";
import Header from "./components/home/header_components/Header";
import BarberCarousel from "./components/home/body/BarberCarousel";
import LocationHeader from "./components/home/body/LocationHeader";
import Footer from "./components/Footer";
import BarberInfoCard from "./components/home/body/BarberInfoCard";
import FiltersButton from "./components/home/body/FiltersButton";
import SortButton from "./components/home/body/SortButton";
import Pagination from "./components/home/body/Pagination"; // Importando o componente Pagination
import InformationCard from "./components/home/body/InformationCard"; // Importando o componente InformationCard
import LoginScreen from "./components/LoginScreen"; // Tela de login
import Subscribe from './components/Subscribe';
import './App.css';
import BarberShopSelected from "./components/barbershop_selected/BarberShopSelected";
import { Route, Routes } from "react-router-dom"; // Removendo comentários desnecessários

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
            { name: "Barbear", price: 40.00, duration: "30min" },
        ],
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
                    <Header />
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
            </Routes>
            
        </>
    );
}

export default App;
