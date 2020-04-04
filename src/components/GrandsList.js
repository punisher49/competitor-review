import React, { Component } from 'react';
import axios from 'axios';
import "./Styles.css"
const Grand = props => (
  <tr>
    <td>{props.grand.productName}</td>
    <td>{props.grand.productCategory}</td>
    <td>{props.grand.weight}</td>
    <td>{props.grand.unit}</td>
    <td>{props.grand.productPriceIdr}</td>
    <td>{props.grand.productPriceAud}</td>
    <td>{props.grand.countryOfManufacture}</td>
    <td>{props.grand.productClaims}</td>
    <td>{props.grand.typeOfPackaging}</td>
    <td>{props.grand.positioningInStore}</td>
    <td>{props.grand.promotion}</td>
    <td>{props.grand.importer}</td>
  </tr>
)
class GrandsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grands: [],
      query: '',
      intervalId: 0
    };
  }
  componentDidMount() {
    axios.get('http://localhost:5000/grands/')
      .then(response => {
        this.setState({
          grands: response.data
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
  scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }

grandList() {
    return this.state.grands.map(currentgrand => {
      if(currentgrand.productName.toLowerCase().match(this.state.query.toLowerCase())){
      return <Grand grand={currentgrand} key={currentgrand._id}/>;
    }else if (currentgrand.productCategory.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Grand grand={currentgrand} key={currentgrand._id}/>;
    }else if (currentgrand.weight.toString().match(this.state.query)){
      return <Grand grand={currentgrand} key={currentgrand._id}/>;
    }else if (currentgrand.unit.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Grand grand={currentgrand} key={currentgrand._id}/>;
    }else if (currentgrand.productPriceIdr.toString().match(this.state.query)){
      return <Grand grand={currentgrand} key={currentgrand._id}/>;
    }else if (currentgrand.productPriceAud.toString().match(this.state.query)){
      return <Grand grand={currentgrand} key={currentgrand._id}/>;
    }else if (currentgrand.countryOfManufacture.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Grand grand={currentgrand} key={currentgrand._id}/>;
    }else if (currentgrand.productClaims.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Grand grand={currentgrand} key={currentgrand._id}/>;
    }else if (currentgrand.typeOfPackaging.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Grand grand={currentgrand} key={currentgrand._id}/>;
    }else if (currentgrand.positioningInStore.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Grand grand={currentgrand} key={currentgrand._id}/>;
    }else if (currentgrand.promotion.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Grand grand={currentgrand} key={currentgrand._id}/>;
    }else if (currentgrand.importer.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Grand grand={currentgrand} key={currentgrand._id}/>;
      }
    })
}

  render() {
    return (
      <div className="render">
        <form className="form-inline d-flex justify-content-center md-form form-sm mt-0">
        <i className="fas fa-search" aria-hidden="true"></i>
          <input
              className="form-control form-control-lrg ml-3 w-50"
              name="query"
              id="search-input"
              type="search"
              placeholder="Search for a Product"
              aria-label="Search"
              onChange={this.handleInputChange}
              onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
              />
        </form>
        <br />


        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="row">Product Name</th>
              <th scope="row">Product Category</th>
              <th scope="row">Weight</th>
              <th scope="row">Unit</th>
              <th scope="row">Price (IDR)</th>
              <th scope="row">Price (AUD)</th>
              <th scope="row">Country of Manufacture</th>
              <th scope="row">Product Claims</th>
              <th scope="row">Type of Packaging</th>
              <th scope="row">Position in Store</th>
              <th scope="row">Promotion</th>
              <th scope="row">Importer</th>
            </tr>
          </thead>
          <tbody>
            { this.grandList() }
          </tbody>
        </table>
        <button title='Back to top' className='scroll'
         onClick={ () => { this.scrollToTop(); }}>
          <i className="fa fa-arrow-up" ></i>
        </button>

      </div>
    )
  }
}

export default GrandsList;
