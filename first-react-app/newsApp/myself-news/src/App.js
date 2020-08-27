import React, { useState, useEffect, useCallback } from 'react';
import NewsPage from './components/NewsPage';
import { Route } from 'react-router-dom';
import Categories from './components/Categories';


function App() {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category => setCategory(category), []);

  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsPage category={category} />
    </>
  );
}


export default App;