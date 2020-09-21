import React, { Component } from "react";
import "./Banner.css";
import ListOfPeople from "../ListOfPeople/ListOfPeople";
import { ProductContext } from "../Context/Context";
export default class Children extends Component {
  static contextType = ProductContext;
  render() {
    const { data } = this.context;
    return (
      <section className="banner col-lg-5">
        <p className="banner-head text-center p-3 font-weight-bold">
          Select an account
        </p>
        {data.map((item) => {
          return <ListOfPeople key={item.id} item={item} />;
        })}
      </section>
    );
  }
}
