// src/App.jsx
import GlobalStyle from "./globalStyle";
import Header from "./components/Header";
import BarberCarousel from "./components/BarberCarousel";
import LocationHeader from "./components/LocationHeader"; // Importe o novo componente

function App() {
    const city = "Itapecerica da Serra"; // Aqui você pode usar o valor da cidade dinamicamente

    return (
        <>
            <GlobalStyle />
            <Header />
            <div>
                <LocationHeader city={city} />
                <BarberCarousel />
            </div>
        </>
    );
}

export default App;
