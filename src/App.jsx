import React, { useContext } from 'react';
import NavBar from './templates/Nav';
import Header from './templates/Header';
import LatestClass from './templates/LatestClass';
import OtherClasses from './templates/OtherClasses';
import Certificates from './templates/Certificates';
import Rankings from './templates/Rankings';
import Footer from './templates/Footer';

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <LatestClass />
      <OtherClasses />
      <Certificates />
      <Rankings />
      <Footer />
    </>
  );
}

export default App;
