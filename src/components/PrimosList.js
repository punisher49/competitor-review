import React, { Component } from 'react';
import axios from 'axios';
import "./Styles.css"
const Primo = props => (
  <tr>
    <td>{props.primo.productName}</td>
    <td>{props.primo.productCategory}</td>
    <td>{props.primo.weight}</td>
    <td>{props.primo.unit}</td>
    <td>{props.primo.productPriceIdr}</td>
    <td>{props.primo.productPriceAud}</td>
    <td>{props.primo.countryOfManufacture}</td>
    <td>{props.primo.productClaims}</td>
    <td>{props.primo.typeOfPackaging}</td>
    <td>{props.primo.positioningInStore}</td>
    <td>{props.primo.promotion}</td>
    <td>{props.primo.importer}</td>
  </tr>
)
class PrimosList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      primos: [],
      query: '',
      intervalId: 0
    };
  }
  componentDidMount() {
    axios.get('http://localhost:5000/primos/')
      .then(response => {
        this.setState({
          primos: response.data
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

primoList() {
    return this.state.primos.map(currentprimo => {
      if(currentprimo.productName.toLowerCase().match(this.state.query.toLowerCase())){
      return <Primo primo={currentprimo} key={currentprimo._id}/>;
    }else if (currentprimo.productCategory.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Primo primo={currentprimo} key={currentprimo._id}/>;
    }else if (currentprimo.weight.toString().match(this.state.query)){
      return <Primo primo={currentprimo} key={currentprimo._id}/>;
    }else if (currentprimo.unit.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Primo primo={currentprimo} key={currentprimo._id}/>;
    }else if (currentprimo.productPriceIdr.toString().match(this.state.query)){
      return <Primo primo={currentprimo} key={currentprimo._id}/>;
    }else if (currentprimo.productPriceAud.toString().match(this.state.query)){
      return <Primo primo={currentprimo} key={currentprimo._id}/>;
    }else if (currentprimo.countryOfManufacture.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Primo primo={currentprimo} key={currentprimo._id}/>;
    }else if (currentprimo.productClaims.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Primo primo={currentprimo} key={currentprimo._id}/>;
    }else if (currentprimo.typeOfPackaging.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Primo primo={currentprimo} key={currentprimo._id}/>;
    }else if (currentprimo.positioningInStore.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Primo primo={currentprimo} key={currentprimo._id}/>;
    }else if (currentprimo.promotion.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Primo primo={currentprimo} key={currentprimo._id}/>;
    }else if (currentprimo.importer.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Primo primo={currentprimo} key={currentprimo._id}/>;
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
            { this.primoList() }
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

export default PrimosList;
