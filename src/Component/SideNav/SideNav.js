import React, { Component } from "react";
import { ProductContext } from "../Context/Context";
import "./SideNav.css";
import { Link } from "react-router-dom";
export default class SideNav extends Component {
  static contextType = ProductContext;
  render() {
    const { sortData } = this.context;
    const { id } = sortData;
    return (
      <div className="sidenav-main">
        <div className="sidenav">
          <Link className="active" to={`/${id}/profile`}>
            Profile
          </Link>
          <Link to={`/${id}/posts`}>Posts</Link>
          <Link to={`/${id}/gallery`}>Gallery</Link>
          <Link to={`/${id}/todo`}>ToDo</Link>
        </div>
      </div>
    );
  }
}
