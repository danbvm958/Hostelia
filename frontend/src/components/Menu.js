import LogoMenu from '../assets/menu.png'
import "../styles/Menu.css"
import { Link } from 'react-router-dom';

export default function Menu(){
    function handleMenu(){
        let Menu = document.getElementById('Menu')
        if(window.getComputedStyle(Menu).display === "none" ){
            Menu.style.display = "flex"
        }
        else{
            Menu.style.display = "none"
        }
    }
    return(
        <>
            <img src={LogoMenu} alt='Menu' onClick={handleMenu} id='MenuButton'/>
            <div className='Menu' id='Menu'>
                <Link to='/login'>Connexion</Link>
                <Link to='/login'>Louez</Link>
                <Link to='/login'>Aide</Link>
            </div>
        </>
    )
}