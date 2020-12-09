import React, { Fragment, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './pages/home/Home';
import NoMatch from './components/NoMatch';
import NavBar from './components/NavBar';
import Register from "./components/Register";
import Login from "./components/Login";
import FetchUser from "./components/FetchUser";
import ProtectedRoute from './components/ProtectedRoute';
import Lander from './pages/home/Lander';
import Map from './components/Map'
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
