  import React, { Component } from 'react';
  import { Link } from 'react-router-dom';
  import axios from 'axios';
  import NumberFormat from 'react-number-format';
  import "./AeonList.css"
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
        intervalId: 0
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
        <div className="render">

          <form className="form-inline d-flex justify-content-center md-form form-sm mt-0">
          <i class="fas fa-search" aria-hidden="true"></i>
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
            <button title='Back to top' className='scroll'
             onClick={ () => { this.scrollToTop(); }}>
              <i class="fa fa-arrow-up" ></i>
            </button>
          </table>

        </div>
      )
    }
  }

  export default AeonsList;
