import { Link } from "react-router-dom";
import Logo from "../assets/LogoHostelia.png";
import Menu from "./Menu";
import '../styles/Header.css';

export default function Header({connected}) {
    return(
        <div className="Header">
        <Link to="/">
            <img src={Logo} alt="Logo d'Hostelia" id="LogoButton"/>
        </Link> 
        <Menu connected={connected}/>
        </div>
    );
}