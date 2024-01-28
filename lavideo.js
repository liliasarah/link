import React from 'react';
import '../App.css';
import { Button } from './Button';
import './lavideo.css';

function lavideo() {
  return (
    <div className='hero-container'>
    <video className='mavideo' src='/videos/video-2.mp4' autoPlay loop muted />
    <h1>UN PARTENAIRE JURIDIQUE IDEALE</h1>
    <p>Notre Annuaire</p>
    <div className='hero-btns'>
      <Button
        className='btns'
        buttonStyle='btn--outline'
        buttonSize='btn--large'
      >
        ANNUAIRE
      </Button>
     
    </div>
  </div>
  )
}

export default lavideo