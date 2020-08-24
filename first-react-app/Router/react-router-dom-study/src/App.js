import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Profiles from './components/Profiles';


function App() {
  return (
    <>
    <ul>
      <li>
        <Link to="/">홈</Link>
      </li>
      <li>
        <Link to="/about">소개</Link>
      </li>
      <li>
        <Link to="/profiles">Profile</Link>
      </li>
    </ul>
    <hr />
    <Switch>
      <Route path="/" component={ Home } exact={true} />
      <Route path={["/about", "/info"]} component={ About } />
      <Route path="/profiles" component={Profiles} />
      <Route
        render={({ location }) => (
          <div>
            <h2>이 페이지는 존재하지 않습니다.</h2>
            <p>{ location.pathname }</p>
          </div>
          )}
        />
    </Switch>
    </>
  );
}

export default App;
