import React, { Component } from 'react';
import axios from 'axios';
import "./Styles.css"
const Hero = props => (
  <tr>
    <td>{props.hero.productName}</td>
    <td>{props.hero.productCategory}</td>
    <td>{props.hero.weight}</td>
    <td>{props.hero.unit}</td>
    <td>{props.hero.productPriceIdr}</td>
    <td>{props.hero.productPriceAud}</td>
    <td>{props.hero.countryOfManufacture}</td>
    <td>{props.hero.productClaims}</td>
    <td>{props.hero.typeOfPackaging}</td>
    <td>{props.hero.positioningInStore}</td>
    <td>{props.hero.promotion}</td>
    <td>{props.hero.importer}</td>
  </tr>
)
class HerosList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heros: [],
      query: '',
      intervalId: 0
    };
  }
  componentDidMount() {
    axios.get('http://localhost:5000/heros/')
      .then(response => {
        this.setState({
          heros: response.data
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

heroList() {
    return this.state.heros.map(currenthero => {
      if(currenthero.productName.toLowerCase().match(this.state.query.toLowerCase())){
      return <Hero hero={currenthero} key={currenthero._id}/>;
    }else if (currenthero.productCategory.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Hero hero={currenthero} key={currenthero._id}/>;
    }else if (currenthero.weight.toString().match(this.state.query)){
      return <Hero hero={currenthero} key={currenthero._id}/>;
    }else if (currenthero.unit.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Hero hero={currenthero} key={currenthero._id}/>;
    }else if (currenthero.productPriceIdr.toString().match(this.state.query)){
      return <Hero hero={currenthero} key={currenthero._id}/>;
    }else if (currenthero.productPriceAud.toString().match(this.state.query)){
      return <Hero hero={currenthero} key={currenthero._id}/>;
    }else if (currenthero.countryOfManufacture.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Hero hero={currenthero} key={currenthero._id}/>;
    }else if (currenthero.productClaims.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Hero hero={currenthero} key={currenthero._id}/>;
    }else if (currenthero.typeOfPackaging.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Hero hero={currenthero} key={currenthero._id}/>;
    }else if (currenthero.positioningInStore.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Hero hero={currenthero} key={currenthero._id}/>;
    }else if (currenthero.promotion.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Hero hero={currenthero} key={currenthero._id}/>;
    }else if (currenthero.importer.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Hero hero={currenthero} key={currenthero._id}/>;
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
            { this.heroList() }
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

export default HerosList;
