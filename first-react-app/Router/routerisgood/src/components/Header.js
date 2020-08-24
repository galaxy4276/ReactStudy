import React from 'react';
import { GrReactjs } from 'react-icons/gr';
import '../styles/header.scss';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-title">
          <GrReactjs />
          <span>은기의 SPA</span>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/dev">개발자</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};


export default Header;