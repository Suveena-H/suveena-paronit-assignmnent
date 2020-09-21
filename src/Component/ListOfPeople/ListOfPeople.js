import React, { Component } from "react";
import "./ListOfPeople.css";
import { Link } from "react-router-dom";
import { ProductContext } from "../Context/Context";
export default class ListOfPeople extends Component {
  static contextType = ProductContext;
  render() {
    const { username, profilepicture, id } = this.props.item;
    const { handleSubmit } = this.context;
    return (
      <div className="row listofpeople">
        <ul className="contacts list-group ">
          <li className="active">
            <div className="d-flex bd-highlight">
              <div className="img_cont">
                <img src={profilepicture} className="rounded-circle user_img" />
                <span className="online_icon"></span>
              </div>
              <div className="user_info">
                <span>
                  <Link
                    to={`/${id}/profile`}
                    className="text-dark text-people"
                    onClick={() => handleSubmit(`${id}`)}
                  >
                    {username}
                  </Link>
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
