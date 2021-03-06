import React, { Component } from "react";
import SideNav from "../../Component/SideNav/SideNav";
import Title from "../../Component/Title/Title";

export default class Gallery extends Component {
  render() {
    return (
      <div className="row">
        <SideNav />
        <div className="col-lg-9 mt-5 ml-3 details">
          <Title title="Gallery" />
          <div className="posts-text">
            <h2 className="display-3">Comming Soon</h2>
          </div>
        </div>
      </div>
    );
  }
}
