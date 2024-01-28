import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 

import './Avocat.css';
const Avocat = ({ nom, specialite, photo, profilLink }) => {
    return (
      <Card className="avocat-card">
        <Card.Img className="avocat-image" variant="top" src={photo} alt={nom} />
        <Card.Body>
          <Card.Title>{nom}</Card.Title>
          <Card.Text>{specialite}</Card.Text>
          {/* Utiliser Link pour créer le lien vers la page Profilpage */}
          <Link to='/Profil' className="avocat-link">
            <Button className="avocat-button" variant="primary">
              Voir le profil
            </Button>
          </Link>
        </Card.Body>
      </Card>
    );
  };
  
  export default Avocat;