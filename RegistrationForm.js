import React, { useState } from 'react';
import './RegistrationForm.css'; // Importez votre fichier CSS


const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    adresse: '',
    specialite: '',
    motDePasse: '',
    confirmerMotDePasse: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.motDePasse === formData.confirmerMotDePasse) {
      try {
        const response = await fetch('/http://localhost:3000/Ins', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data.message); // Afficher le message de succès
        } else {
          console.error('Erreur lors de la requête HTTP');
        }
      } catch (error) {
        console.error('Erreur lors de la requête HTTP:', error);
      }
    } else {
      console.error("Les mots de passe ne correspondent pas.");
    }
  };

  return (
    <div className="registration-container">
      <form className="registration-form" onSubmit={handleSubmit}>
        <h2>Inscription</h2>
        <div className="form-group">
          <label htmlFor="nom">Nom*</label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="prenom">Prénom*</label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail*</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="adresse">Adresse*</label>
          <input
            type="text"
            id="adresse"
            name="adresse"
            value={formData.adresse}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="specialite">Spécialité*</label>
          <select
            id="specialite"
            name="specialite"
            value={formData.specialite}
            onChange={handleChange}
            required
          >
            <option value="" disabled> </option>
            {/* Ajoutez vos options de spécialité ici */}
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="motDePasse">Mot de passe*</label>
          <input
            type="password"
            id="motDePasse"
            name="motDePasse"
            value={formData.motDePasse}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmerMotDePasse">Confirmer le mot de passe</label>
          <input
            type="password"
            id="confirmerMotDePasse"
            name="confirmerMotDePasse"
            value={formData.confirmerMotDePasse}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
