// Profil.js

import React from 'react';
import CommentSection from './CommentSection';
import '../App.css';
import './corpsprofil.css';
import { Link } from 'react-router-dom';

const EmailLink = () => {
  const emailAdresse = 'lisaines8@gmail.com';

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAdresse}`;
  };

  return (
    <div>
      <a id='mail' href={`mailto:${emailAdresse}`} onClick={handleEmailClick}>
        {emailAdresse}
      </a>
    </div>
  );
};

const Profil = () => {
  return (
    <div className='bloc'>
      <img id='pho' src='/images/av1.jpeg' alt='la pdp' />
      <div className='infos_perso'>
        <h2 id='nom'>Nom Prenom</h2>
        <h3>Droit commercial, des affaires et de la concurrence.</h3>
        <h3 id='exp'>6 ans d'expérience</h3>
        <EmailLink />
        <h3 id='num'>0034736291</h3>
        <h3 id='num'> MON ADRESSE</h3>
        <ul id='comp'>
          <li>Compétence 1</li>
          <li>Compétence 2</li>
          <li>Compétence 3</li>
          <li>Compétence 4</li>
        </ul>
       
        <div className='rdv'>
        <h3>Les Rendez-vous</h3>
        <Link to='/Appointment'><button id='prdv' type='submit'>Prendre RDV</button></Link>
        </div>
        <CommentSection />
       
      </div>
    </div>
  );
};

export default Profil;
