import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import Profile from './Profile';
import WithRouterSample from './WithRouterSample';


const Profiles = () => {
  const activeStyle = {
    background: 'black',
    color: 'white'
  };

  return (
    <div>
      <h3>사용자 목록</h3>      
      <ul>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/choi">choi</NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/jun">jun</NavLink>
        </li>
      </ul>

      <Route
        path="/profiles"
        exact
        render={() => <div>Select Users plz</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
      <WithRouterSample />
    </div>
  );
};


export default Profiles;