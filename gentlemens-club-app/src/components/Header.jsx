import {HeaderContainer, Nav, NavList, NavInputs, HeaderWrapper, ImageContainer, Image, Link, LoginSignUp, Input, InputWrapper, Select, LoginWrapper} from "../styled_components/header/HeaderStyle";

import { FaSearch, FaMapMarkerAlt, FaStopwatch, FaRegUserCircle } from "react-icons/fa";

import logo from '/src/assets/LogoGentlemensClub.png';


const gray = "#dddddd";

function Header() {
    return (
        <HeaderContainer>
            <ImageContainer>
                    <Image src={logo} alt="Logo do Gentlemens Club" />
            </ImageContainer>
            <HeaderWrapper>
                <Nav>
                    <NavInputs>

                        <InputWrapper>
                            <FaSearch style={{color: gray}} className="icons"/>
                            <Input type="text" placeholder="Pesquise serviços e barbearias" />
                        </InputWrapper>
                            
                        <InputWrapper>
                            <FaMapMarkerAlt style={{color: gray}} className="icons" />
                            <Input type="text" placeholder="Itapecerica da Serra" />
                        </InputWrapper>

                        <InputWrapper>
                            <FaStopwatch style={{color: gray}} className="icons" />
                            <Input type="text" placeholder="Quando?"/>
                        </InputWrapper>
                        
                        <LoginWrapper>
                            <FaRegUserCircle style={{color: gray}} className="icons" />
                            <LoginSignUp href="">
                                Entrar / Inscrever-se
                            </LoginSignUp>
                        </LoginWrapper>
                        
                        <Select name="" id="">
                            <option value="pt-br">
                                🇧🇷
                                BR
                            </option>
                            <option value="en-us">
                                🇺🇸 
                                EN
                            </option>
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
            </HeaderWrapper>    
        </HeaderContainer>
    );
}

export default Header;