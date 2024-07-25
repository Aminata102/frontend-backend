// Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Importer le fichier de style

function Login() {

    let navigate=useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Logique de connexion
    };

    const passer=()=>{


        navigate('/')
    }

    return (
        <div className="App">
            <header className="App-header">
                <h2 className="title">Connexion</h2>
                <form onSubmit={handleSubmit} className="form">
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Adresse e-mail :</label>
                        <input type="email" id="email" value={email} onChange={handleEmailChange} className="form-input" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Mot de passe :</label>
                        <input type="password" id="password" value={password} onChange={handlePasswordChange} className="form-input" />
                    </div>
                    <button onClick={passer} type="submit" className="btn">Se connecter</button>
                </form>
                <div>
                    Vous n'avez pas de compte ? <Link to="/register" className="nav-link">Inscrivez-vous</Link>
                </div>
            </header>
        </div>
    );
}

export default Login;
