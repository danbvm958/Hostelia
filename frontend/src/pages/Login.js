import { useState } from "react";
import '../styles/Login.css'
import Header from "../components/Header";
import { Link } from 'react-router-dom';

export default function Login(){
    const [mail, setmail] = useState("");
    const [password, setpassword] = useState("");
    const [error, setError] = useState("");
    function handleLogin(e){
        e.preventDefault(); 

        const user = {
            Mail : mail,
            Password : password
        };

        fetch('http://localhost:5000/auth/login',{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            credentials: "include",
            body : JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log("Réponse du serveur :", data);
            if (data.message === "Connexion établie") {
                window.location.href = '/';
            } else {
                setError(data.message);
            }
        })
        .catch(err => console.error("Erreur lors de la requête :", err));
    }

    return(
        <>
            <Header />
            <form id="ConnectForm" onSubmit={handleLogin}>
                <label>Entrez votre e-mail :</label>
                <input 
                type="mail"
                value={mail}
                onChange={e => setmail(e.target.value)}
                required
                />
                <br/>
                <label>Entrez votre mot de passe :</label>
                <input
                type="password"
                value={password}
                onChange={e=>setpassword(e.target.value)}
                required
                />
                {error && <p className="error">{error}</p>}
                <br/>
                <p >Pas inscrit ? <Link to="/register">Inscrivez vous</Link></p>
                <input
                type="submit"
                />
            </form>
        </>
        
    );
}