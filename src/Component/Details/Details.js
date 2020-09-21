import React, { Component } from "react";
import "./Details.css";
export default class Details extends Component {
  render() {
    const {
      profilepicture,
      username,
      email,
      website,
      phone,
    } = this.props.sortData;
    return (
      <section className="details-section">
        <div className="inf-left col-lg-5 details-left">
          <img
            src={profilepicture}
            className="rounded-circle text-center mx-auto"
            alt="img"
          />
          <h4 className="mt-2">{username}</h4>
          <div className="personal-details">
            <div className="personal-left ">
              <h5>Username : </h5>
              <h5>e-mail : </h5>
              <h5>Phone : </h5>
              <h5>Website : </h5>
            </div>
            <div className="ml-2 text-left personal-right">
              <h5>{username}</h5>
              <h5>{email}</h5>
              <h5>{phone}</h5>
              <h5>{website}</h5>
            </div>
          </div>
          <hr></hr>
          <div className="company-details mt-2">
            <h5 className="comapny-title text-center">Company</h5>
            <div className="company">
              <div className="company-left">
                <h5>Name : </h5>
                <h5>catchphrase : </h5>
                <h5>bs : </h5>
              </div>
              <div className="ml-2 text-left company-right">
                {/* <h5>{this.props.sortData.address.street}</h5> */}
                <h5>{email}</h5>
                <h5>{phone}</h5>
                <h5>{website}</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="inf-right col-lg-7 details-right mr-3">
          <h5 className="right-text">Address</h5>
          <div className="address mt-3">
            <div className="address-left ml-2">
              <h5>Street : </h5>
              <h5>Suite : </h5>
              <h5>City : </h5>
              <h5>Zipcode : </h5>
            </div>
            <div className="ml-2 text-left address-right">
              <h5>{username}</h5>
              <h5>{email}</h5>
              <h5>{phone}</h5>
              <h5>{website}</h5>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
