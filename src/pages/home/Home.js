import home from './Home.module.css'
import Photo from '../../assets/DSC_6610.JPG'
import React from 'react';

function Home() {
  return (
    <div className={home.main}>
      <div className={home.content}>
      <img className={home.image} src={Photo} alt='me' />
      <div>
      <h1>Laura CASTERAN</h1>
      <h2>Développeur frontend - junior</h2>
      </div>
      </div>
    </div>
  );
}

export default Home;
