import React, { Component } from "react";
const ProductContext = React.createContext();
class ProductProvider extends Component {
  state = {
    data: [],
    sortData: [],
  };
  componentDidMount() {
    this.handleData();
  }
  handleData = async () => {
    const response = await fetch(`https://panorbit.in/api/users.json`);
    const json = await response.json();
    this.setState({
      data: json.users,
    });
  };
  handleSubmit = (id) => {
    const { data } = this.state;
    console.log(data);
    let sortdata = data.find((item) => item.id == id);
    this.setState({
      sortData: sortdata,
    });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{ ...this.state, handleSubmit: this.handleSubmit }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

export { ProductContext, ProductProvider };
