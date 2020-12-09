import React, { Fragment, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './pages/home/Home';
import NoMatch from './Components/NoMatch';
import NavBar from './Components/NavBar';
import Register from "./Components/Register";
import Login from "./Components/Login";
import FetchUser from "./Components/FetchUser";
import ProtectedRoute from './Components/ProtectedRoute';
import Lander from './pages/home/Lander';
import Map from './Components/Map'
import Search from './pages/search/Search'
import PostView from './pages/posts/PostView'


import './App.css';


const App = () => (
  <Fragment>
  
    <NavBar />
    <FetchUser>
    <br />
  
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/search" component={Search} />
        <Route exact path="/postid" component={PostView} />
        <Route path="/map" component={Map} />
        <Route exact path="/" component={Lander} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route component={NoMatch} />
      </Switch>
  
    </FetchUser>
  </Fragment>
);

export default App;
