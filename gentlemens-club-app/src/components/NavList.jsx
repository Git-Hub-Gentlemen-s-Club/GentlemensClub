import { NavList} from "../styled_components/home/header_style/NavBarStyle";
import { Link } from "../styled_components/home/header_style/HeaderStyle";
function NavListComponent() {
    return (
        <NavList>
            <li>
                <Link href="">Corte de cabelo</Link>
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