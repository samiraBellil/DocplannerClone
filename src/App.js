import React from 'react';
import './App.css';
import NavMenu from './NavMenu';
import Header from './Header';
import Paragraphe from './Paragraphe';
import Images from './Images';
import Company from './Company';
import Card from './Card'; 
import Changes from './Changes';
import Places from './Places';
import Footer from './Footer';







function App() {
  return (
    <div className="App">
      <NavMenu/>
      <Header/>
      <Paragraphe/>
      <Images />
      <Company/>
      <Card/>
      <Changes/>
      <Places/>
      <Footer/>
     </div>
  );
}

export default App;
