import React from 'react';
import '../styles/nav.scss';
import { Link } from 'react-router-dom';


const Nav = () => {
  return (
    <div className="side-nav">
      <nav>
            <Link to="/profile">프로필</Link>
            <Link to="/wish">위시 리스트</Link> 
      </nav>
    </div>
  );
};


export default Nav;