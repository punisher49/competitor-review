import React, { Component } from 'react';
import axios from 'axios';
import "./Styles.css"
const Farmer = props => (
  <tr>
    <td>{props.farmer.productName}</td>
    <td>{props.farmer.productCategory}</td>
    <td>{props.farmer.weight}</td>
    <td>{props.farmer.unit}</td>
    <td>{props.farmer.productPriceIdr}</td>
    <td>{props.farmer.productPriceAud}</td>
    <td>{props.farmer.countryOfManufacture}</td>
    <td>{props.farmer.productClaims}</td>
    <td>{props.farmer.typeOfPackaging}</td>
    <td>{props.farmer.positioningInStore}</td>
    <td>{props.farmer.promotion}</td>
    <td>{props.farmer.importer}</td>
  </tr>
)
class FarmerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      farmers: [],
      query: '',
      intervalId: 0
    };
  }
  componentDidMount() {
    axios.get('http://localhost:5000/farmers/')
      .then(response => {
        this.setState({
          farmers: response.data
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

farmerList() {
    return this.state.farmers.map(currentaeon => {
      if(currentaeon.productName.toLowerCase().match(this.state.query.toLowerCase())){
      return <Farmer farmer={currentaeon} key={currentaeon._id}/>;
      }else if (currentaeon.productCategory.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Farmer farmer={currentaeon} key={currentaeon._id}/>;
      }else if (currentaeon.weight.toString().match(this.state.query)){
      return <Farmer farmer={currentaeon} key={currentaeon._id}/>;
      }else if (currentaeon.unit.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Farmer farmer={currentaeon} key={currentaeon._id}/>;
      }else if (currentaeon.productPriceIdr.toString().match(this.state.query)){
      return <Farmer farmer={currentaeon} key={currentaeon._id}/>;
      }else if (currentaeon.productPriceAud.toString().match(this.state.query)){
      return <Farmer farmer={currentaeon} key={currentaeon._id}/>;
      }else if (currentaeon.countryOfManufacture.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Farmer farmer={currentaeon} key={currentaeon._id}/>;
      }else if (currentaeon.productClaims.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Farmer farmer={currentaeon} key={currentaeon._id}/>;
      }else if (currentaeon.typeOfPackaging.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Farmer farmer={currentaeon} key={currentaeon._id}/>;
      }else if (currentaeon.positioningInStore.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Farmer farmer={currentaeon} key={currentaeon._id}/>;
      }else if (currentaeon.promotion.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Farmer farmer={currentaeon} key={currentaeon._id}/>;
      }else if (currentaeon.importer.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Farmer farmer={currentaeon} key={currentaeon._id}/>;
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
            { this.farmerList() }
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

export default FarmerList;
