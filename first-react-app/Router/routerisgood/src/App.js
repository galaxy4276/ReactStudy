import React from 'react';
import Header from './components/Header';
import './styles/_reset.scss';
import Nav from './components/Nav';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Dev from './components/Dev';


function App() {
  return (
    <>
      <Header />
      <Nav />
      <Route path="/" exact component={Home} />
      <Route path="/dev" component={Dev} />
    </>
    );
}


export default App;
