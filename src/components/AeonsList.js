

  import React, { Component } from 'react';
  import { Link } from 'react-router-dom';
  import axios from 'axios';
  import NumberFormat from 'react-number-format';
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
      this.state = {aeons: []};
    }

    componentDidMount() {
      axios.get('http://localhost:5000/aeons/')
        .then(response => {
          this.setState({ aeons: response.data })
        })
        .catch((error) => {
          console.log(error);
        })
    }

  aeonList() {
      return this.state.aeons.map(currentaeon => {
        return <Aeon aeon={currentaeon} key={currentaeon._id}/>;
      })
    }

    render() {
      return (
        <div>
          <h3>Aeons</h3>
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
