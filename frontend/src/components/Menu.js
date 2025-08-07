import LogoMenu from '../assets/menu.png'
import "../styles/Menu.css"
import { Link } from 'react-router-dom';
import { logout } from '../utils/auth';


export default function Menu({ connected }) {
    function handleMenu(){
        let Menu = document.getElementById('Menu')
        if(window.getComputedStyle(Menu).display === "none" ){
            Menu.style.display = "flex"
        }
        else{
            Menu.style.display = "none"
        }
    }
    async function handleLogout(e) {
        e.preventDefault();
        await logout();
        window.location.href = '/'; 
    }
    return(
        <>
            <img src={LogoMenu} alt='Menu' onClick={handleMenu} id='MenuButton'/>
            <div className='Menu' id='Menu'>
                <Link to={connected ? '/profile' : '/login'} id='ConnexionPage'>
                    {connected ? 'Profil' : 'Connexion'}
                </Link>
                <Link to='#test'>Louez</Link>
                <Link to='#test'>Aide</Link>
                {connected ? <a href='logout' onClick={handleLogout} id='LogoutButton'>Déconnexion </a> : null}
            </div>
        </>
    )
}