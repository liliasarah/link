import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Avocat from './Avocat';
import SearchBar from './SearchBar';
import './Annuaire.css';

const avocats = [
  { nom: 'Avocat 1', specialite: 'Droit pénal', photo: 'lien_vers_photo_1.jpg', profilLink: '/dd' },
  { nom: 'Avocat 2', specialite: 'Droit civil', photo: 'lien_vers_photo_2.jpg', profilLink: '/avocat2' },
  { nom: 'Avocat 3', specialite: 'Droit civil', photo: 'lien_vers_photo_2.jpg', profilLink: '/avocat3' },
  { nom: 'Avocat 3', specialite: 'Droit civil', photo: 'lien_vers_photo_2.jpg', profilLink: '/avocat3' },
  { nom: 'Avocat 3', specialite: 'Droit civil', photo: 'lien_vers_photo_2.jpg', profilLink: '/avocat3' },
  { nom: 'Avocat 3', specialite: 'Droit civil', photo: 'lien_vers_photo_2.jpg', profilLink: '/avocat3' },
  { nom: 'Avocat 3', specialite: 'Droit civil', photo: 'lien_vers_photo_2.jpg', profilLink: '/avocat3' },
  // Ajoutez autant d'avocats que nécessaire
];

const Annuaire = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  const filteredAvocats = avocats.filter((avocat) =>
    avocat.specialite.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="Annuaire">
      <h1>ANNUAIRE</h1>
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <Row className="avocat-row">
        {filteredAvocats.map((avocat, index) => (
          <Col key={index} className="avocat-col">
            <Avocat {...avocat} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Annuaire;