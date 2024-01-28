import React from 'react';
import { Carousel } from 'react-bootstrap';
import './corps.css';
import { Link } from 'react-router-dom';

function Corps() {
  return (
    <div className='contenaire'>
       <div className='avocats'>
        <h6>Nos suggestions</h6>
      <Carousel controls={false} indicators={false}>
          <Carousel.Item>
            <Link to="/chemin-interne"><img className='d-block w-100' src='/images/av1.jpeg' alt='Avocat 1' /></Link>
            <Carousel.Caption>
              <h3>Avocat 1</h3>
              <p>Description de l'avocat 1.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <Link to="/chemin-interne"><img className='d-block w-100' src='/images/av2.jpg' alt='Avocat 2' /></Link>
            <Carousel.Caption>
              <h3>Avocat 2</h3>
              <p>Description de l'avocat 2.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <Link to="/chemin-interne"><img className='d-block w-100' src='/images/av3.jpg' alt='Avocat 3' /></Link>
            <Carousel.Caption>
              <h3>Avocat 3</h3>
              <p>Description de l'avocat 3.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <Link to="/chemin-interne"> <img className='d-block w-100' src='/images/av4.jpg' alt='Avocat 4' /></Link>
            <Carousel.Caption>
              <h3>Avocat 4</h3>
              <p>Description de l'avocat 4.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className='cards'>
        <div className="dd">
          <h5>Notre mission</h5>
          <p id='pp'>Bienvenue sur Mouhami Dz, une plateforme dédiée à la simplification de la recherche d'avocats qualifiés et expérimentés. Notre engagement est d'offrir une solution complète pour répondre à vos besoins juridiques en facilitant la connexion entre les clients et les professionnels du droit. Notre mission fondamentale est de rendre la recherche d'un avocat accessible, rapide et fiable. Nous croyons en l'égalité d'accès à la justice, et nous travaillons ardemment pour créer un environnement où la recherche d'un avocat adapté à vos besoins est aussi simple que possible. Nous nous efforçons de mettre en relation nos utilisateurs avec des avocats compétents pour assurer une expérience juridique positive.<br />Nous sommes déterminés à maintenir des normes élevées d'intégrité, de qualité et de service. Chaque avocat répertorié sur notre plateforme est sélectionné avec soin et doit respecter des critères rigoureux. Notre engagement envers l'excellence garantit que nos utilisateurs bénéficient d'un accès à des avocats de premier plan, prêts à les guider à travers leurs problèmes juridiques.</p>
        </div>
        <div className="dd">
          <h5>Fonctionnement</h5>
          <p id='pp'>Notre annuaire propose une interface conviviale qui vous permet de filtrer les avocats en fonction de divers critères tels que les domaines de pratique, la localisation, les langues parlées, et plus encore. Chaque profil d'avocat comprend des informations détaillées sur leurs qualifications, expériences, ainsi que des références et des avis clients. Nous croyons que l'accès à des informations approfondies est essentiel pour vous permettre de prendre des décisions informées lors du choix de votre avocat.</p>
        </div>
        <div className="dd">
          <h5>Notre plateforme</h5>
          <p id='pp'>Bienvenue sur Mouhami Dz, une plateforme dédiée à la simplification de la recherche d'avocats qualifiés et expérimentés. Notre engagement est d'offrir une solution complète pour répondre à vos besoins juridiques en facilitant la connexion entre les clients et les professionnels du droit.</p>
        </div>
        <div className="dd">
          <h5>Notre engagement</h5>
          <p id='pp'>L'équipe dévouée de Mouhami Dz est disponible pour vous aider à tout moment. Si vous avez des questions, des préoccupations ou si vous avez besoin d'une assistance quelconque, n'hésitez pas à nous contacter. Votre satisfaction est notre priorité, et nous sommes là pour vous accompagner dans vos recherches juridiques. Merci de faire partie de la communauté Mouhami Dz. Nous sommes impatients de vous offrir une expérience juridique exceptionnelle.</p>
        </div>
      </div>
     
    </div>
  );
}

export default Corps;
