import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import Axios from 'axios';


const NewsPageBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;


const NewsPage = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await Axios.get(`http://newsapi.org/v2/top-headlines?country=kr&apiKey=ae612e97d74842a1af322f3ab643944b`);
        setArticles(response.data.articles);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    }

    fetchData();
  }, []);


  if (loading) {
    return <NewsPageBlock>대기 중..</NewsPageBlock>;
  }

  if (!articles) {
    return null;  
  }

  return (
    <NewsPageBlock>
      {
        articles.map((article) => (
          <NewsItem
            key={article.url}
            article={article}
          />
        ))
      }
    </NewsPageBlock>
  );
};


export default NewsPage;