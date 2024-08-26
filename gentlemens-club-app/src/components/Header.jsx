import {Head, Nav, NavList, NavInputs, Body, ImageContainer} from "../styled_components/header";

function Header () {
    return (
        <Body>
        <Head>
            <ImageContainer>
                <img src="../../../assets/LogoGentlemensClub.png" alt="Logo do Gentlemens Club" />
            </ImageContainer>
            <Nav>
                <NavInputs>
                    <input type="text" placeholder="Pesquise serviços ou barbearias-" />
                    <input type="text" placeholder="Itapecerica da Serra" />
                    <input type="text" placeholder="Quando?"/>
                    <a>Entrar / Inscrever-se</a>
                    <select name="" id="">
                        <option value="pt-br">BR</option>
                        <option value="en-us">EN</option>
                    </select>
                </NavInputs>
                
                <NavList>
                    <li>Corte de cabelo</li>
                    <li>Barbearias</li>
                    <li>Cortes em casa</li>
                    <li>Spa & Massagem</li>
                    <li>Sobrancelhas & Cílios</li>
                    <li>Agendamentos</li>
                    <li>Mais...</li>
                </NavList>
            </Nav>
            
        </Head>
        </Body>
    );
}

export default Header;