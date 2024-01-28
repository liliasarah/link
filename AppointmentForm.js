import React, { useState } from 'react';
import axios from 'axios';
import './AppointmentForm.css';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    phoneNumber: '',
    selectedLawyer: '',
    selectedDate: '',
    selectedTime: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/Appointment', formData);
      console.log('Réponse de Django:', response.data);
      // Traitez la réponse de Django en conséquence si nécessaire
    } catch (error) {
      console.error('Erreur lors de la requête:', error);
      // Affichez un message d'erreur à l'utilisateur si nécessaire
    }
  };

  return (
    <div className="registration-container">
      <div className="registration-form">
        <form onSubmit={handleSubmit}>
          <h2>Formulaire de Rendez-vous</h2>
          <div className="form-group">
            <label>
              Prénom:
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Nom:
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Adresse:
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Numéro de téléphone:
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Avocat souhaité:
              <select
                name="selectedLawyer"
                value={formData.selectedLawyer}
                onChange={handleInputChange}
                required
              >
                <option value="">Sélectionnez un avocat</option>
                <option value="avocat1">Avocat 1</option>
                <option value="avocat2">Avocat 2</option>
                {/* Ajoutez d'autres options d'avocats si nécessaire */}
              </select>
            </label>
          </div>
          <div className="form-group">
            <label>
              Date:
              <input
                type="date"
                name="selectedDate"
                value={formData.selectedDate}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Heure:
              <input
                type="time"
                name="selectedTime"
                value={formData.selectedTime}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
          {/* Ajoutez d'autres champs de formulaire de la même manière */}
          <div className="form-group">
            <button type="submit">Prendre rendez-vous</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
