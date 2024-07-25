// ForgotPassword.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ForgotPassword.css'; // Importer le fichier de style

function ForgotPassword() {
    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Logique de réinitialisation du mot de passe
    };

    return (
        <div className="App">
            <header className="App-header">
                <h2 className="title">Mot de passe oublié</h2>
                <form onSubmit={handleSubmit} className="form">
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Adresse e-mail :</label>
                        <input type="email" id="email" value={email} onChange={handleEmailChange} className="form-input" />
                    </div>
                    <button type="submit" className="btn">Réinitialiser</button>
                </form>
            </header>
        </div>
    );
}

export default ForgotPassword;