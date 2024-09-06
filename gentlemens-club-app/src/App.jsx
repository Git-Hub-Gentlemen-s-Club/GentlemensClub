import React, { useState } from "react";
import GlobalStyle from "./styled_components/GlobalStyle";
import Header from "./components/Header";
import BarberCarousel from "./components/BarberCarousel";
import LocationHeader from "./components/LocationHeader";
import Footer from "./components/Footer";
import BarberInfoCard from "./components/BarberInfoCard";
import FiltersButton from "./components/FiltersButton";
import SortButton from "./components/SortButton";
import Pagination from "./components/Pagination"; // Importando o componente Pagination
import InformationCard from "./components/InformationCard"; // Importando o componente InformationCard
import './App.css'; // Incluindo os estilos atualizados
import BarberShopSelected from "./components/BarberShopSelected";

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
            {/* <Header />
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
            <InformationCard city={city} /> Adicionando o componente InformationCard */}
            <BarberShopSelected />
            <Footer />
        </>
    );
}

export default App;
