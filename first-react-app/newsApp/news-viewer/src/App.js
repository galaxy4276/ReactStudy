import React, { useState, useCallback } from 'react';
import axios from 'axios';
import Categories from './components/Categories';
import NewsList from './components/NewsList';
import { Route } from 'react-router-dom';
import NewsPage from './components/NewsPage';


// api key : ae612e97d74842a1af322f3ab643944b

function App() {
  return <Route path="/:category?" component={ NewsPage } />;
}


export default App;
