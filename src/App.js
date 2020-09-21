import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import Gallery from "./Pages/Gallery/Gallery";
import Posts from "./Pages/Posts/Posts";
import Todo from "./Pages/Todo/Todo";
import Profile from "./Component/Profile/Profile";
import SideNav from "./Component/SideNav/SideNav";
export default class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/:id/profile" component={Profile}></Route>
          <Route exact path="/:id/gallery" component={Gallery}></Route>
          <Route exact path="/:id/posts" component={Posts}></Route>
          <Route exact path="/:id/todo" component={Todo}></Route>
        </Switch>
      </>
    );
  }
}
