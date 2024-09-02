import {HeaderContainer, Nav, NavList, NavInputs, Body, ImageContainer, Image, Link, LoginSignUp, Input, Select} from "../styled_components/header/HeaderStyle";

import logo from '/src/assets/LogoGentlemensClub.png';

function Header () {
    return (
        <Body>
            <HeaderContainer>
                <ImageContainer>
                    <Image src={logo} alt="Logo do Gentlemens Club" />
                </ImageContainer>
                <Nav>
                    <NavInputs>
                        <Input type="text" placeholder="Pesquise serviços ou barbearias-" />
                        <Input type="text" placeholder="Itapecerica da Serra" />
                        <Input type="text" placeholder="Quando?"/>
                        <LoginSignUp href="">Entrar / Inscrever-se</LoginSignUp>
                        <Select name="" id="">
                            <option value="pt-br">BR</option>
                            <option value="en-us">EN</option>
                        </Select>
                        <Input type="checkbox" name="" id="" />
                    </NavInputs>
                    <NavList>
                        <li><Link href="">Corte de cabelo</Link></li>
                        <li><Link href="">Barbearias</Link></li>
                        <li><Link href="">Cortes em casa</Link></li>
                        <li><Link href="">Spa & Massagem</Link></li>
                        <li><Link href="">Sobrancelhas & Cílios</Link></li>
                        <li><Link href="">Agendamentos</Link></li>
                        <li><Link href="">Mais...</Link></li>
                    </NavList>
                </Nav>
            </HeaderContainer>    
        </Body>
    );
}

export default Header;