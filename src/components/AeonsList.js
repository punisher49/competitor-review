  import React, { Component } from 'react';
  import { Link } from 'react-router-dom';
  import axios from 'axios';
  import NumberFormat from 'react-number-format';
  import Search from "./Search";
  const Aeon = props => (
    <tr>
      <td>{props.aeon.productName}</td>
      <td>{props.aeon.productCategory}</td>
      <td>{props.aeon.weight}</td>
      <td>{props.aeon.unit}</td>
      <td>{props.aeon.productPriceIdr}</td>
      <td>{props.aeon.productPriceAud}</td>
      <td>{props.aeon.countryOfManufacture}</td>
      <td>{props.aeon.productClaims}</td>
      <td>{props.aeon.typeOfPackaging}</td>
      <td>{props.aeon.positioningInStore}</td>
      <td>{props.aeon.promotion}</td>
      <td>{props.aeon.importer}</td>
    </tr>
  )
  class AeonsList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        aeons: [],
        query: '',
      };
    }
    componentDidMount() {
      axios.get('http://localhost:5000/aeons/')
        .then(response => {
          this.setState({
            aeons: response.data
           })
        })
        .catch((error) => {
          console.log(error);
        })
    }
    handleInputChange = (event) => {
      event.preventDefault();
      const value = event.target.value;
      console.log('Value', value)
      setTimeout(() => {
        this.setState({
          query: value
        });
      }, 3000);
    };

  aeonList() {
      return this.state.aeons.map(currentaeon => {
        if(currentaeon.productName.toLowerCase().match(this.state.query.toLowerCase())){
        return <Aeon aeon={currentaeon} key={currentaeon._id}/>;
        }else if (currentaeon.productCategory.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Aeon aeon={currentaeon} key={currentaeon._id}/>;
        }else if (currentaeon.weight.toString().match(this.state.query)){
        return <Aeon aeon={currentaeon} key={currentaeon._id}/>;
        }else if (currentaeon.unit.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Aeon aeon={currentaeon} key={currentaeon._id}/>;
        }else if (currentaeon.productPriceIdr.toString().match(this.state.query)){
        return <Aeon aeon={currentaeon} key={currentaeon._id}/>;
        }else if (currentaeon.productPriceAud.toString().match(this.state.query)){
        return <Aeon aeon={currentaeon} key={currentaeon._id}/>;
        }else if (currentaeon.countryOfManufacture.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Aeon aeon={currentaeon} key={currentaeon._id}/>;
        }else if (currentaeon.productClaims.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Aeon aeon={currentaeon} key={currentaeon._id}/>;
        }else if (currentaeon.typeOfPackaging.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Aeon aeon={currentaeon} key={currentaeon._id}/>;
        }else if (currentaeon.positioningInStore.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Aeon aeon={currentaeon} key={currentaeon._id}/>;
        }else if (currentaeon.promotion.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Aeon aeon={currentaeon} key={currentaeon._id}/>;
        }else if (currentaeon.importer.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Aeon aeon={currentaeon} key={currentaeon._id}/>;
        }
      })
  }

    render() {
      return (
        <div>
        <form className="form-inline my-2 my-lg-0">
          <input
              className="form-control mr-sm-2"
              name="query"
              id="search-input"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={this.handleInputChange}
              />
        </form>
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th scope="row">Product Name</th>
                <th scope="row">Product Category</th>
                <th scope="row">Weight</th>
                <th scope="row">Unit</th>
                <th scope="row">Product Price (IDR)</th>
                <th scope="row">Product Price (AUD)</th>
                <th scope="row">Country of Manufacture</th>
                <th scope="row">Product Claims</th>
                <th scope="row">Type of Packaging</th>
                <th scope="row">Position in Store</th>
                <th scope="row">Promotion</th>
                <th scope="row">Importer</th>
              </tr>
            </thead>
            <tbody>
              { this.aeonList() }
            </tbody>
          </table>
        </div>
      )
    }
  }

  export default AeonsList;
