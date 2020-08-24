import React from 'react';
import qs from 'qs';


const About = ({ location }) => {
  console.log(location);
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true // 문자열 ? 생략
  });

  const showDetail = query.detail === 'true';

  return (
    <div>
      <h1>소개</h1>      
      <p>About Page</p>
      { showDetail && <p>detail값을 true로 설정하셨군요!</p> }
    </div>
  );
};


export default About;