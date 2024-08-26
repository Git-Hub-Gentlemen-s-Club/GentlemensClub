import styled from "styled-components";

const Head = styled.header`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
    background-color: #000000;
    
`;

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    color: #ffffff;
`;

const NavList = styled.ul`
    list-style-type: none;
    display: flex;
    gap: 1em;
    color: #b58934;
`;

const NavInputs = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1em;
`;

const Body = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    max-width: 800px;
`;

const ImageContainer = styled.div`
    display: flex;
    align-items: center;
`;
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