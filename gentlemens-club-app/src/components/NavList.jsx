import { NavList} from "../styled_components/home/header_style/NavBarStyle";
import { Link } from "../styled_components/home/header_style/HeaderStyle";
import { useNavigate } from "react-router-dom";
function NavListComponent() {
    const navigate = useNavigate();

    return (
        <NavList>
            <li>
                <Link onClick={navigate('/UserMenu')}>Corte de cabelo</Link>
            </li>
            <li>
                <Link href="">Barbearias</Link>
            </li>
            <li>
                <Link href="">Cortes em casa</Link>
            </li>
            <li>
                <Link href="">Spa & Massagem</Link>
            </li>
            <li>
                <Link href="">Sobrancelhas & Cílios</Link>
            </li>
            <li>
                <Link href="">Tratamentos Capilares</Link>
            </li>
            <li>
                <Link href="">Alisamento</Link>
            </li>
            <li>
                <Link href="">Mais...</Link>
            </li>
        </NavList>
    );
} 

export default NavListComponent;