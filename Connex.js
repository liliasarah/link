import React, { useState } from 'react';
import './RegistrationForm.css'; // Assurez-vous d'importer le fichier CSS

const Connex = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // TODO: Ajoutez la logique d'authentification ici
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="registration-container">
      <div className="registration-form">
        <h2>Connexion</h2>
        <form>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Mot de passe:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="button" onClick={handleLogin}>
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
};

export default Connex;