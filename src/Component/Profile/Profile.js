import React, { Component } from "react";
import { ProductContext } from "../Context/Context";
import "./Profile.css";
import SideNav from "../SideNav/SideNav";
import Title from "../Title/Title";
import Details from "../Details/Details";
export default class Profile extends Component {
  static contextType = ProductContext;
  render() {
    const { sortData } = this.context;
    return (
      <section>
        <div className="row">
          <SideNav />
          <div className="details mt-5 ml-4 col-lg-9">
            <Title title="Profile" />
            <Details sortData={sortData} />
          </div>
        </div>
      </section>
    );
  }
}
