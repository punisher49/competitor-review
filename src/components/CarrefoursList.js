import React, { Component } from 'react';
import axios from 'axios';
import "./Styles.css"
const Carrefour = props => (
  <tr>
    <td>{props.carrefour.productName}</td>
    <td>{props.carrefour.productCategory}</td>
    <td>{props.carrefour.weight}</td>
    <td>{props.carrefour.unit}</td>
    <td>{props.carrefour.productPriceIdr}</td>
    <td>{props.carrefour.productPriceAud}</td>
    <td>{props.carrefour.countryOfManufacture}</td>
    <td>{props.carrefour.productClaims}</td>
    <td>{props.carrefour.typeOfPackaging}</td>
    <td>{props.carrefour.positioningInStore}</td>
    <td>{props.carrefour.promotion}</td>
    <td>{props.carrefour.importer}</td>
  </tr>
)
class CarrefoursList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carrefours: [],
      query: '',
      intervalId: 0
    };
  }
  componentDidMount() {
    axios.get('http://localhost:5000/carrefours/')
      .then(response => {
        this.setState({
          carrefours: response.data
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

carrefourList() {
    return this.state.carrefours.map(currencarrefour => {
      if(currencarrefour.productName.toLowerCase().match(this.state.query.toLowerCase())){
      return <Carrefour carrefour={currencarrefour} key={currencarrefour._id}/>;
    }else if (currencarrefour.productCategory.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Carrefour carrefour={currencarrefour} key={currencarrefour._id}/>;
    }else if (currencarrefour.weight.toString().match(this.state.query)){
      return <Carrefour carrefour={currencarrefour} key={currencarrefour._id}/>;
    }else if (currencarrefour.unit.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Carrefour carrefour={currencarrefour} key={currencarrefour._id}/>;
    }else if (currencarrefour.productPriceIdr.toString().match(this.state.query)){
      return <Carrefour carrefour={currencarrefour} key={currencarrefour._id}/>;
    }else if (currencarrefour.productPriceAud.toString().match(this.state.query)){
      return <Carrefour carrefour={currencarrefour} key={currencarrefour._id}/>;
    }else if (currencarrefour.countryOfManufacture.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Carrefour carrefour={currencarrefour} key={currencarrefour._id}/>;
    }else if (currencarrefour.productClaims.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Carrefour carrefour={currencarrefour} key={currencarrefour._id}/>;
    }else if (currencarrefour.typeOfPackaging.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Carrefour carrefour={currencarrefour} key={currencarrefour._id}/>;
    }else if (currencarrefour.positioningInStore.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Carrefour carrefour={currencarrefour} key={currencarrefour._id}/>;
    }else if (currencarrefour.promotion.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Carrefour carrefour={currencarrefour} key={currencarrefour._id}/>;
    }else if (currencarrefour.importer.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Carrefour carrefour={currencarrefour} key={currencarrefour._id}/>;
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
            { this.carrefourList() }
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

export default CarrefoursList;
