// Register.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [acceptTerms, setAcceptTerms] = useState(false);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleCheckboxChange = (event) => {
        setAcceptTerms(event.target.checked);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Logique d'inscription
    };

    return (
        <div className="register-container">
            <h2 className="register-title">Inscrivez-vous en tant qu'administrateur</h2>
            <form onSubmit={handleSubmit} className="register-form">
                <div className="register-form-group">
                    <label htmlFor="name" className="register-form-label">Nom :</label>
                    <input type="text" id="name" value={name} onChange={handleNameChange} className="register-form-input" />
                </div>
                <div className="register-form-group">
                    <label htmlFor="email" className="register-form-label">Email :</label>
                    <input type="email" id="email" value={email} onChange={handleEmailChange} className="register-form-input" />
                </div>
                <div className="register-form-group">
                    <label htmlFor="password" className="register-form-label">Mot de passe :</label>
                    <input type="password" id="password" value={password} onChange={handlePasswordChange} className="register-form-input" />
                </div>
                <div className="register-form-group">
                    <input type="checkbox" id="acceptTerms" checked={acceptTerms} onChange={handleCheckboxChange} />
                    <label htmlFor="acceptTerms">Accepter les termes et la politique</label>
                </div>
                <button type="submit" className="register-form-button">S'inscrire</button>
            </form>
            <div>
                Vous avez déjà un compte ? <Link to="/login">Connectez-vous</Link>
            </div>
        </div>
    );
}

export default Register;
