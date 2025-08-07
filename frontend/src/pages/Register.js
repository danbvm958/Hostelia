import { useState } from "react";
import '../styles/Login.css'
import Header from "../components/Header";
import { Link } from 'react-router-dom';

export default function Register(){
    const [mail, setmail] = useState("");
    const [password, setpassword] = useState("");
    const [name, setname] = useState("");
    const [familyName, setfamilyName] = useState("");
    const [birthdate, setbirthdate] = useState("");

    function handleRegister(e){
        e.preventDefault(); 

        const user = {
            Name : name,
            FamilyName : familyName,
            Birthdate : birthdate,
            Mail : mail,
            Password : password
        };

        fetch('http://localhost:5000/auth/signup',{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body : JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => console.log("Réponse du serveur :", data))
        .catch(err => console.error("Erreur lors de la requête :", err));
    }

    return(
        <>
            <Header />
            <form id="ConnectForm" onSubmit={handleRegister}>
                <label>Entrez votre nom :</label>
                <input 
                type="text"
                name="name"
                value={familyName}
                onChange={e => setfamilyName(e.target.value)}
                required
                />
                <br/>
                <label>Entrez votre prénom :</label>
                <input 
                type="text"
                name="firstName"
                value={name}
                onChange={e => setname(e.target.value)}
                required
                />
                <br/>
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
                <br/>
                <label>Entrez votre date d'anniversaire :</label>
                <input 
                type="date"
                name="birthdate"
                value={birthdate}
                onChange={e => setbirthdate(e.target.value)}
                required
                />
                <p >Déja inscrit ? <Link to="/login">Connectez vous</Link></p>
                <input
                type="submit"
                />
            </form>
        </>
        
    );
}