import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsPage from './components/NewsPage';

function App() {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(async () => {
    setLoading(true);

    const fetchData = await axios.get('http://newsapi.org/v2/top-headlines?country=kr&apiKey=ae612e97d74842a1af322f3ab643944b');
    setArticles(fetchData.data.articles);

    setLoading(false);
  });
 
  
  if (loading === true) {
    return <div>로딩 중입니다...</div>
  } 

  return (
    <NewsPage articles={articles} />
  )
}


export default App;
