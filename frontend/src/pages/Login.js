import { useState } from "react";
import '../styles/Login.css'
import Header from "../components/Header";

export default function Login(){
    const [mail, setmail] = useState("");
    const [password, setpassword] = useState("");

    return(
        <>
            <Header />
            <form id="LoginForm">
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
                <input
                type="submit"
                />
            </form>
        </>
        
    );
}