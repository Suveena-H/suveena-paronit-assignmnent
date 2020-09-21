import React, { Component } from "react";
import "./Title.css";
import { ProductContext } from "../Context/Context";
import { Link } from "react-router-dom";
export default class Title extends Component {
  state = {
    opened: false,
  };
  handleClick = () => {
    this.setState({
      opened: !this.state.opened,
    });
  };
  static contextType = ProductContext;
  render() {
    const { sortData } = this.context;
    const { name, profilepicture, email } = sortData;
    const { title } = this.props;

    return (
      <section className="title-main">
        <div className="title">
          <div>
            <h5>{title}</h5>
          </div>
          <div className="right-title">
            <img src={profilepicture} className="rounded-circle right-img" />
            <span className="ml-3 title-name" onClick={this.handleClick}>
              {name}
            </span>
          </div>
        </div>
        <hr></hr>
        {this.state.opened && (
          <div className="float-right right-click mx-auto text-center">
            <img src={profilepicture} className="rounded-circle " />
            <h6 className="text-center">{name}</h6>
            <h6 className="text-center email">{email}</h6>
            <hr></hr>
            <button className="btn btn-danger mt-2">
              <Link className="text-white " to="/">
                Sign Out
              </Link>
            </button>
          </div>
        )}
      </section>
    );
  }
}
