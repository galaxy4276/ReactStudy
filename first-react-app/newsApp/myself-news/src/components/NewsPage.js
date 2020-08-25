import React from 'react';
import NewsItem from './NewsItem';


const NewsPage = ({ articles }) => {
  console.log(articles);

  return (
    <>
      {
        articles.map(article => (
          <NewsItem 
            key = {article.url}
            article = {article}
          />          
        ))
      }
    </>
  );
};


export default NewsPage;