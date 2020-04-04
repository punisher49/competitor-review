import React, { Component } from 'react';
import axios from 'axios';
import "./Styles.css"
const Rancho = props => (
  <tr>
    <td>{props.rancho.productName}</td>
    <td>{props.rancho.productCategory}</td>
    <td>{props.rancho.weight}</td>
    <td>{props.rancho.unit}</td>
    <td>{props.rancho.productPriceIdr}</td>
    <td>{props.rancho.productPriceAud}</td>
    <td>{props.rancho.countryOfManufacture}</td>
    <td>{props.rancho.productClaims}</td>
    <td>{props.rancho.typeOfPackaging}</td>
    <td>{props.rancho.positioningInStore}</td>
    <td>{props.rancho.promotion}</td>
    <td>{props.rancho.importer}</td>
  </tr>
)
class RanchosList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ranchos: [],
      query: '',
      intervalId: 0
    };
  }
  componentDidMount() {
    axios.get('http://localhost:5000/ranchos/')
      .then(response => {
        this.setState({
          ranchos: response.data
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

ranchoList() {
    return this.state.ranchos.map(currentrancho => {
      if(currentrancho.productName.toLowerCase().match(this.state.query.toLowerCase())){
      return <Rancho rancho={currentrancho} key={currentrancho._id}/>;
    }else if (currentrancho.productCategory.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Rancho rancho={currentrancho} key={currentrancho._id}/>;
    }else if (currentrancho.weight.toString().match(this.state.query)){
      return <Rancho rancho={currentrancho} key={currentrancho._id}/>;
    }else if (currentrancho.unit.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Rancho rancho={currentrancho} key={currentrancho._id}/>;
    }else if (currentrancho.productPriceIdr.toString().match(this.state.query)){
      return <Rancho rancho={currentrancho} key={currentrancho._id}/>;
    }else if (currentrancho.productPriceAud.toString().match(this.state.query)){
      return <Rancho rancho={currentrancho} key={currentrancho._id}/>;
    }else if (currentrancho.countryOfManufacture.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Rancho rancho={currentrancho} key={currentrancho._id}/>;
    }else if (currentrancho.productClaims.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Rancho rancho={currentrancho} key={currentrancho._id}/>;
    }else if (currentrancho.typeOfPackaging.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Rancho rancho={currentrancho} key={currentrancho._id}/>;
    }else if (currentrancho.positioningInStore.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Rancho rancho={currentrancho} key={currentrancho._id}/>;
    }else if (currentrancho.promotion.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Rancho rancho={currentrancho} key={currentrancho._id}/>;
    }else if (currentrancho.importer.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Rancho rancho={currentrancho} key={currentrancho._id}/>;
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
            { this.ranchoList() }
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

export default RanchosList;
