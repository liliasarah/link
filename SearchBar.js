import React from 'react';
import { Form } from 'react-bootstrap';
import './SearchBar.css'; // Import your CSS file

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <Form>
      <Form.Group controlId="formSearch" className="mb-2">
        <Form.Control
          type="text"
          placeholder="Rechercher par spécialité"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          size="sm"
          className="search-bar-input" // Use the correct class name
        />
      </Form.Group>
    </Form>
  );
};

export default SearchBar;
