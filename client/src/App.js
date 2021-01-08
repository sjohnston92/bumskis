import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import NoMatch from "./components/NoMatch";
import NavBar from "./components/NavBar";
import Register from "./components/Register";
import Login from "./components/Login";
import FetchUser from "./components/FetchUser";
import ProtectedRoute from "./components/ProtectedRoute";
import Lander from "./pages/home/Lander";
import Map from "./components/Map";
import Search from "./pages/search/Search";
import PostView from "./pages/posts/PostView";
import UserProfile from "./pages/profiles/UserProfile"
import How from "./pages/home/How"
import Footer from "./components/Footer"

import "./App.css";

const App = () => (
  <Fragment>
    <NavBar />
    <FetchUser>
      <br />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/how_it_works" component={How} />
        <Route path="/search" component={Search} />
        <Route exact path="/post/:id" component={PostView} />
        <Route path="/map" component={Map} />
        <Route exact path="/profile" component={UserProfile}/>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route component={NoMatch} />
      </Switch>
    </FetchUser>
    <Footer/>
  </Fragment>
);

export default App;
