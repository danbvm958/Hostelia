import { Link } from "react-router-dom";
import Logo from "../assets/LogoHostelia.png"
import SearchBar from "./SearchBar";
import Menu from "./Menu";
import '../styles/Header.css'

export default function Header(){
    return(
        <div className="Header">
        <Link to="/">
            <img src={Logo} alt="Logo d'Hostelia" id="LogoButton"/>
        </Link> 
        <Menu />
        </div>
    );
}